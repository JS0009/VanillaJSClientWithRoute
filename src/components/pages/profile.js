import Page from "./page";

export default class Profil extends Page {
    constructor(pathname) {
        super(pathname)
    }

    render() {
        this.parent.innerHTML = 'Profil'
    }
}