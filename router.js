// Создаём класс Router
class Router {
    // Конструктор получает массив маршрутов и запускает инициализацию.
    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
    }

    // Загрузка начального маршрута при перезагрузке страницы или при первом посещении.
    _loadInitialRoute() {
        // Определение параметров в URL и преобразование URL в массив.
        const pathNameSplit = window.location.pathname.split('/');
        const pathParams = pathNameSplit.slice(2);

        // Определение пути в URL и преобразование пути в массив.
        const pathSegments = this._getPathSegments(window.location.hash);
        // Находим маршрут, который соответствует пути.
        const matchedRoute = this._matchUrlToRoute(pathSegments, pathParams);

        // Загружаем компонент, связанный с найденным маршрутом.
        this._loadComponent(matchedRoute.component);
    }

    // Сравниваем путь и параметры в URL с каждым маршрутом в массиве маршрутов и находим маршрут, который соответствует URL.
    _matchUrlToRoute(pathSegments, pathParams) {
        const matchedRoute = this.routes.find(route => {
            // Разбираем путь маршрута на массив и сравниваем количество элементов массива маршрута с количеством элементов массива пути.
            const routePathSplit = route.path.split('/');
            if (routePathSplit.length !== pathSegments.length) {
                return false;
            }
            // Проверяем каждый элемент массива маршрута и пути на соответствие.
            const match = routePathSplit.every((routePathSegment, i) => {
                return routePathSegment === pathSegments[i] || routePathSegment[0] === ':';
            });
            // Если маршрут соответствует URL, добавляем параметры в массив параметров.
            if (match) {
                for (let i = 0; i < routePathSplit.length; i++) {
                    if (routePathSplit[i][0] === ':') {
                        pathParams.push(pathSegments[i]);
                    }
                }
            }
            // Возвращаем true, если маршрут соответствует URL.
            return match;
        });

        return matchedRoute;
    }

    // Переводим хеш URL в массив пути.
    _getPathSegments(hash) {
        return hash.split('/').map(segment => {
            return segment.replace(/^#/, '');
        });
    }

    // Загружаем компонент, связанный с маршрутом.
    _loadComponent(componentName, pathParams = []) {
        // Извлекаем имя модуля компонента из имени файла.
        const module = componentName.split('_')[0];

        // Импортируем модуль компонента.
        import(`./${module}.js`).then(module => {
            // Получаем функцию, которая отрисовывает компонент и передаём ей массив параметров.
            const page = module.default;
            page(pathParams);
        }).catch(err => {
            console.error(`Error loading component: ${err}`);
        });
    }

  // Метод для изменения хеш URL в браузере и вызова _