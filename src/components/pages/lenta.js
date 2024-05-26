import Page from "./page";
import { pages } from "../database";
import store from "../../redux/store";
import { slice } from "../../redux/basket";

export default class Lenta extends Page {
    constructor(pathname) {
        super(pathname)
    }
    render() {
        //pages.forEach(card => {
        pages.forEach(({ id, name, description, category, price, brand, rating }) => {
            const template = document.querySelector(".card"); // создаем новый элемент div
            const card = template.cloneNode(true);
            card.querySelector(".card-title").textContent = name; // задаем текст для нового элемента
            card.querySelector(".card-category").textContent = category; // задаем текст для нового элемента
            card.querySelector(".card-description").textContent = description; // задаем текст для нового элемента
            card.querySelector(".card-price").textContent = price; // задаем текст для нового элемента
            card.querySelector(".card-brand").textContent = brand; // задаем текст для нового элемента
            card.querySelector(".card-rating").textContent = rating; // задаем текст для нового элемента
            const addToBasket = card.querySelector(".add-to-basket");
            addToBasket.setAttribute('data-id', id);
            addToBasket.addEventListener('click', function () {
                const { id } = this.dataset;
                store.dispatch(slice.actions.addProduct(id));

            }) //Деструкция []{}?
            this.parent.appendChild(card); // добавляем новый элемент в конец списка дочерних элементов родительского элемента
        });
    }
}