class HistoryRouter {
    constructor() {
        this.routes = {};
        this.currentUrl = '';
    }

    route(path, callback) {
        this.routes[path] = callback;
    }

    updateView() {
        const url = location.pathname;
        if (this.currentUrl === url) {
            return;
        }

        if (!this.routes[url]) {
            console.error(`No route defined for ${url}`);
            return;
        }

        document.querySelector('div').innerHTML = this.routes[url]();
        this.currentUrl = url;
    }

    init() {
        window.addEventListener('popstate', this.updateView.bind(this));

        const links = document.querySelectorAll('nav a');
        links.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const path = link.getAttribute('href');
                history.pushState(null, null, path);
                this.updateView();
            });
        });

        this.updateView();
    }
}

const router = new HistoryRouter();

router.route('/home', () => `<h1>Welcome to the homepage</h1>`);
router.route('/about', () => `<h1>About us</h1><p>We're a small company...</p>`);
router.route('/contact', () => `<h1>Contact us</h1><form><input type="text" placeholder="Name"/><input type="email" placeholder="Email"/><textarea placeholder="Message"></textarea><button type="submit">Send</button></form>`);

router.init();