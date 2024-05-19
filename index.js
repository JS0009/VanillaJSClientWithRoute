//import { pages } from "./src/components/database";
import { notFound } from "./src/components/pages/notFound";
import Basket from "./src/components/pages/basket";
import Profil from "./src/components/pages/profile";
import Lenta from "./src/components/pages/lenta";
import Delivery from "./src/components/pages/delivery";
import Address from "./src/components/pages/address";
import "./index.css"
import "./src/styles/nav.css"


export function viewUpdate() {
    const { pathname } = window.location
    switch (pathname) {
        case '/':
            const pageLenta = new Lenta(pathname)
            pageLenta.render()
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
            const pageAddress = new Address(pathname)
            pageAddress.render()
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
        history.replaceState(null, null, path);
        viewUpdate()
    });
});


//window.addEventListener('popstate', viewUpdate)
window.onload = () => {
    viewUpdate()
}

