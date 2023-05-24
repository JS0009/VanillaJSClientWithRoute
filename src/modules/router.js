import RenderPageClass from "../components/renders/renderPage";

export class HistoryRenderRouter {
    constructor() {
        this.routes = '';
        this.routeURL = '';
    }

    route(path, callback) {
        this.routes = callback;



    }
    render() {
        new RenderPageClass(this.routes, this.routeURL).renders();
    }

}



