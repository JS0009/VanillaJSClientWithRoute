export class History {
    constructor(pathname) {
        this.pathname = pathname
        this.parent = document.getElementById('app')
        this.parent.innerHTML = ''
        history.pushState(null, null, this.pathname)
    }

}