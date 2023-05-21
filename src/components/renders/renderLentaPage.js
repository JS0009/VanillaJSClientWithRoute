export function renderLentaPage(routes, url) {

    document.querySelector('div').innerHTML = routes[url]();

}
