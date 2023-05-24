
export default class РistoryRenderRouter {
    constructor() {
        this.routes = '';
        this.routeURL = '';
    }

    route(path, callback) {
        this.routes = callback;
        this.routeURL = path;


    }
    render() {
        const containerApp = document.getElementById('app');
        const scrollContainer = document.createElement('div');
        scrollContainer.innerHTML = this.routes;
        containerApp.appendChild(scrollContainer);
    }

    init() {
        const links = document.querySelectorAll('nav a');
        links.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const path = link.getAttribute('href');
                history.pushState(null, null, path);
                viewUpdate()
            });
        });

    }
}



