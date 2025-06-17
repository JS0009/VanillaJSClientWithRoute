import { History } from "../router/history"

export default class Delivery extends History {
    constructor(pathname) {
        super(pathname)
    }

    render() {
        this.parent.innerHTML = 'Delivery'
    }
}