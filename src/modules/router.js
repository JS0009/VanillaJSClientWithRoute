import RenderPageClass from "../components/renders/renderPage";

export class HistoryRenderRouter {
    constructor() {
        this.routes = '';
        this.routeURL = '';
    }

    route(path, callback) {
        this.routes = callback;
        this.routeURL = path;
        console.log(this.routes)

    }
    render() {
        new RenderPageClass(this.routes, this.routeURL).renders();
    }

}



