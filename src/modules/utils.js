import { renderLentaPage } from "../components/renders/renderLentaPage";

export function preparationRender(routePath, routes, url) {

    switch (routePath) {
        case '/':
            renderLentaPage(routes, url)
            break;
        case '/address':
            renderLentaPage(routes, url)
            break;
        case '/delivery':
            renderLentaPage(routes, url)
            break;
        case '/profile':
            renderLentaPage(routes, url)
            break;
        case '/basket':
            renderLentaPage(routes, url)
            break;
        default:
        // Код, который выполнится, если expression не равно ни одному из значений
    }

}