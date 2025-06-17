// Импортируем функцию для создания хранилища
import { pages } from '../database.js';
import { createStore } from './store.js';

// Мок-данные, имитирующие товары из базы или с сервера
// const pages = [
//     { id: 1, name: 'Ноутбук', price: 50000 },   // Первый товар
//     { id: 2, name: 'Смартфон', price: 30000 }   // Второй товар
// ];

// Начальное состояние приложения с пустым каталогом и пустой корзиной
const initialState = {
    products: [],  // Здесь будет список товаров
    cart: []       // Здесь будут товары, добавленные в корзину
};

// Редьюсер — чистая функция, которая принимает текущее состояние и действие,
// и возвращает новое состояние на основе типа действия
function reducer(state, action) {
    switch (action.type) {

        // Загружаем список товаров в состояние
        case 'LOAD_PRODUCTS':
            return {
                ...state,                    // Копируем старое состояние
                products: action.payload     // Заменяем products на данные из экшена
            };

        // Добавляем товар в корзину
        case 'ADD_TO_CART':
            return {
                ...state,                    // Копируем старое состояние
                cart: [...state.cart, action.payload]  // Добавляем новый товар в конец массива корзины
            };

        // Удаляем товар из корзины по его id
        case 'REMOVE_FROM_CART':
            return {
                ...state,                                        // Копируем старое состояние
                cart: state.cart.filter(item => item.id !== action.payload.id)  // Создаём новый массив без удаляемого товара
            };

        // Если действие неизвестно — возвращаем текущее состояние без изменений
        default:
            return state;
    }
}

// Создаем наше хранилище, передавая редьюсер и начальное состояние
const store = createStore(reducer, initialState);

// Подписываемся на изменения состояния — чтобы обновлять интерфейс при изменениях
store.subscribe(render);

// Основная функция для обновления интерфейса
function render() {
    const state = store.getState();  // Получаем актуальное состояние из хранилища

    // -------------------------
    // Рендерим каталог товаров
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';      // Очищаем контейнер перед рендером

    state.products.forEach(product => {
        const div = document.createElement('div');   // Создаем контейнер для одного товара
        div.textContent = `${product.name} — ${product.price}₽`;  // Показываем название и цену

        const btn = document.createElement('button');  // Создаем кнопку "В корзину"
        btn.textContent = 'В корзину';
        btn.onclick = () => {
            // При клике отправляем экшен добавления товара в корзину
            store.dispatch({
                type: 'ADD_TO_CART',
                payload: product
            });
        };

        div.appendChild(btn);           // Добавляем кнопку внутрь блока товара
        productList.appendChild(div);   // Добавляем товар в список товаров
    });

    // -------------------------
    // Рендерим корзину
    const cart = document.getElementById('cart');
    cart.innerHTML = '';             // Очищаем корзину перед рендером

    state.cart.forEach(item => {
        const div = document.createElement('div');   // Контейнер для товара в корзине
        div.textContent = `${item.name} — ${item.price}₽ `;  // Показываем название и цену

        const removeBtn = document.createElement('button');  // Кнопка для удаления из корзины
        removeBtn.textContent = 'Удалить';
        removeBtn.onclick = () => {
            // При клике отправляем экшен удаления товара из корзины
            store.dispatch({
                type: 'REMOVE_FROM_CART',
                payload: { id: item.id }
            });
        };

        div.appendChild(removeBtn);     // Добавляем кнопку удаления к товару
        cart.appendChild(div);           // Добавляем товар в корзину
    });
}

// Инициализируем магазин — загружаем товары из моков в состояние
store.dispatch({
    type: 'LOAD_PRODUCTS',
    payload: pages
});
