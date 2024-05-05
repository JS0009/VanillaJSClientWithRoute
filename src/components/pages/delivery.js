import Page from "./page";

export default class Delivery extends Page {
    constructor(pathname) {
        super(pathname)
    }

    render() {
        this.parent.innerHTML = 'Delivery'
    }
}