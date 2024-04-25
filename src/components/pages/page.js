export default class Page {
    constructor(pathname) {
        this.pathname = pathname
        this.parent = document.getElementById('app')
        this.parent.innerHTML = ''
        history.pushState(null, null, this.pathname)
    }

    render() {
        throw 'это абстрактный метод'
    }
}