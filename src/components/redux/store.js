// Импортируем функцию configureStore из библиотеки reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit'// Импортируем функцию appReducer из файла reducers
import appReducer from './reducers';
// Импортируем массив страниц, который нужно сохранить в Redux
import { pages } from '../database';

// Определение начального состояния приложения, используя импортированный массив
const initialState = {
    products: pages
};

// Создание нового хранилища, передавая функцию appReducer и начальное состояние
const store = configureStore({
    reducer: {
        myReducer: appReducer
    }
});

// Экспортирование хранилища для использования в других частях приложения
export default store;