import Page from "./page";
import { pages } from "../database";


export default class Lenta extends Page {
    constructor(pathname) {
        super(pathname)
    }
    render() {
        pages.forEach(card => {
            const lenta = document.getElementById("card"); // создаем новый элемент div
            const cards = lenta.cloneNode(true);
            cards.querySelector("h5").textContent = card.name; // задаем текст для нового элемента
            cards.querySelector("#category").textContent = card.category; // задаем текст для нового элемента
            cards.querySelector("#description").textContent = card.description; // задаем текст для нового элемента
            cards.querySelector("#price").textContent = card.price; // задаем текст для нового элемента
            cards.querySelector("#brand").textContent = card.brand; // задаем текст для нового элемента
            cards.querySelector("#rating").textContent = card.rating; // задаем текст для нового элемента
            console.log(cards);
            this.parent.appendChild(cards); // добавляем новый элемент в конец списка дочерних элементов родительского элемента
        });
    }
}