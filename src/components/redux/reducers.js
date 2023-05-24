// Импортируем константу SET_PRODUCTS из файла actions
import { SET_PRODUCTS } from './actions';

// Определение начального состояния приложения с пустым массивом для продуктов
const initialState = {
    products: []
};

// Определение функции редюсера, которая принимает предыдущее состояние и действие в качестве аргументов
export default function appReducer(state = initialState, action) {
    switch (action.type) {
        // Если тип действия SET_PRODUCTS, возвращает новый объект состояния с обновленным массивом продуктов
        case SET_PRODUCTS:
            return {
                ...state, // Используем оператор расширения для копирования предыдущего состояния
                products: action.payload.products // Заменяем массив продуктов на тот, который пришел в свойстве payload действия
            }
        // Если тип действия не совпадает, возвращает предыдущее состояние без изменений
        default:
            return state;
    }
}