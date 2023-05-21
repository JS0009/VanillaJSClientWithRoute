export function preparationRender(routePath, routes, url) {

    document.querySelector('div').innerHTML = routes[url]();
    this.currentUrl = url;

}