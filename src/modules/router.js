
export default class HistoryRouter {
    constructor() {
        this.routes = '';
        this.locationUrl = '';
    }

    route(path, callback) {
        this.routes = callback;
        this.locationUrl = path;
        console.log(this.routes())
    }

}



