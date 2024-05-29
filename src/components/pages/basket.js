import Page from "./page";
import store from "../../redux/store";
import { showBasket } from "../../redux/basket";

let html = "пусто"
store.subscribe(() => {
    console.log("ddd")
    const update = store.dispatch(showBasket({}))
    if (html === update) return
    html = update
})
export default class Basket extends Page {
    constructor(pathname) {
        super(pathname)

    }

    render() {
        this.parent.innerHTML = html

    }
}