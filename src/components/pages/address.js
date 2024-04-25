import Page from "./page";

export default class Address extends Page {
    constructor(pathname) {
        super(pathname)
    }

    render() {
        this.parent.innerHTML = 'Adress'
    }
}