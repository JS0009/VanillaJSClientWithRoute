import { History } from "../router/history"

export default class Basket extends History {
    constructor(pathname) {
        super(pathname)

    }

    render() {
        this.parent.innerHTML = "Basket"

    }
}