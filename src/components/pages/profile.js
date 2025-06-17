import { History } from "../router/history"

export default class Profil extends History {
    constructor(pathname) {
        super(pathname)
    }

    render() {
        this.parent.innerHTML = 'Profil'
    }
}