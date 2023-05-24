
export default class RenderPageClass {
    constructor(page, path) {
        this.page = page
        this.path = path
    }
    renders() {
        const containerApp = document.getElementById('app');
        const scrollContainer = document.createElement('div');
        scrollContainer.classList.add('my-container-class');
        scrollContainer.innerHTML = this.page;
        containerApp.appendChild(scrollContainer);
    }
}

