import Basket from "../pages/basket"
import Delivery from "../pages/delivery"
import Lenta from "../pages/lenta"
import Profil from "../pages/profile"
import Address from "../pages/address"
import { notFound } from "../pages/notFound"



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

export function navigation() {
    const links = document.querySelectorAll('nav a');
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const path = link.getAttribute('href');
            history.replaceState(null, null, path);
            viewUpdate()
        });
    });
}