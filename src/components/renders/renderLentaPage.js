import HistoryRouter from "../../modules/router";

export default class RenderLentaPageClass extends HistoryRouter {
    constructor(routes) {
        super(routes)

    }

    render() {
        const containerApp = document.getElementById('app');
        const scrollContainer = document.createElement('div');
        scrollContainer.innerHTML = this.routes;
        console.log(this.routes);
        containerApp.appendChild(scrollContainer);
    }
}

