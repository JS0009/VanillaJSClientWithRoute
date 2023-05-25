// Импортируем необходимые модули
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import fetch from 'node-fetch';

// Задаем начальное состояние приложения
const initialState = {
    products: [],
    error: null
};

// Генератор для получения данных о продуктах
export function* fetchProducts() {
    try {
        // Отправляем запрос на сервер и получаем ответ
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');

        // Преобразуем полученные данные в JSON
        const json = yield call([response, 'json']);

        // Отправляем событие о том, что данные успешно получены
        yield put({ type: 'FETCH_PRODUCTS_SUCCESS', products: json });
    } catch (error) {
        // Отправляем событие о том, что при получении данных произошла ошибка
        yield put({ type: 'FETCH_PRODUCTS_ERROR', error });
        console.error(error);
    }
}

// Создаем главный генератор, который будет следить за тем, чтобы данные были получены только один раз
function* rootSaga() {
    yield takeLatest('FETCH_PRODUCTS', fetchProducts);
}

// Создаем middleware для работы с генераторами
const sagaMiddleware = createSagaMiddleware();

// Создаем редьюсер для изменения состояния приложения
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.products
            };
        case 'FETCH_PRODUCTS_ERROR':
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}

// Создаем хранилище для хранения состояния приложения и применяем middleware
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// Запускаем главный генератор
sagaMiddleware.run(rootSaga);

// Отправляем событие о необходимости получения данных
store.dispatch({ type: 'FETCH_PRODUCTS' });

// Подписываемся на изменения состояния и выводим текущее состояние
store.subscribe(() => {
    console.log('Current state:', store.getState());
});