import { HistoryRenderRouter } from "./src/modules/router";
import { lentaPage } from "./src/components/pages/lentaPageComponent"
import { pages } from "./src/components/database";
import Basket from "./src/components/pages/basket";
import { notFound } from "./src/components/pages/notFound";
import Profil from "./src/components/pages/profile";
import Delivery from "./src/components/pages/delivery";
import Address from "./src/components/pages/address";
import "./index.css"
import "./src/styles/nav.css"

const router = new HistoryRenderRouter();

export function viewUpdate() {
    const { pathname } = window.location
    switch (pathname) {
        case '/':
            for (const data of pages) {
                router.route('/', lentaPage(data));
                router.render()
            }
            return
        case '/basket':
            const pageBasket = new Basket(pathname)
            pageBasket.render()
            return
        case '/profile':
            const profilePage = new Profil(pathname);
            profilePage.render()
            return
        case '/delivery':
            const pageDelivery = new Delivery(pathname)
            pageDelivery.render()
            return
        case '/address':
            const page = new Address(pathname)
            page.render()
            return
        default:
            router.route('/404', notFound());
            return

    }

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

