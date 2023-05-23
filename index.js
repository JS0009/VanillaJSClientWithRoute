import HistoryRouter from "./src/modules/router";
import { lentaPage } from "./src/components/pages/lentaPageComponent"
import { pages } from "./src/components/database";
import { basketPage } from "./src/components/pages/basketPage";
import { profilePage } from "./src/components/pages/profilePage";
import { deliveryPage } from "./src/components/pages/deliveryPage";
import { addressPage } from "./src/components/pages/addressPage";
import "./index.css"
import "./src/styles/nav.css"
import RenderLentaPageClass from "./src/components/renders/renderLentaPage";

const router = new HistoryRouter();
const renderPage = new RenderLentaPageClass()


export function viewUpdate() {
    if (window.location.pathname === '/') {
        for (const data of pages) {
            router.route('/', () => lentaPage(data));
        } renderPage.render()
    } else if (window.location.pathname === '/basket') {
        router.route('/basket', () => basketPage());
    } else if (window.location.pathname === '/profile') {
        router.route('/profile', () => profilePage());
    } else if (window.location.pathname === '/delivery') {
        router.route('/delivery', () => deliveryPage());
    } else if (window.location.pathname === '/address') {
        router.route('/address', () => addressPage());
    } else { router.route(window.location.pathname, () => '<h1>Маршурут отсутствует</h1>') } // в случаее, если нет совпадения 
}

const links = document.querySelectorAll('nav a');
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const path = link.getAttribute('href');
        history.pushState(null, null, path);
        viewUpdate()
    });
});

window.addEventListener('popstate', viewUpdate)

window.onload = () => {
    viewUpdate()
}

