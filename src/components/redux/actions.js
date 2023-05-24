// Определение константы для представления типа действия
export const SET_PRODUCTS = 'SET_PRODUCTS';

// Функция, которая создает объект действия
export function setProducts(products) {
    // Возвращает объект с типом и свойством payload
    return {
        type: SET_PRODUCTS,
        payload: { products } // Используем сокращенную запись объекта для значения переменной products в свойстве "products"
    }
}