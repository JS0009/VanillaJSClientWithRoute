import { History } from "../router/history"

export default class Address extends History {
    constructor(pathname) {
        super(pathname)
    }

    render() {
        this.parent.innerHTML = 'Adress'
    }
}