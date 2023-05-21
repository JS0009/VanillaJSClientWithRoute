import HistoryRouter from "./src/modules/router";
import basketPage from "./src/components/pages/basketPage";
import profilePages from "./src/components/pages/profilePages";
import deliveryPages from "./src/components/pages/deliveryPage";
import addressPage from "./src/components/pages/addressPage";
import lentaPage from "./src/components/pages/lentaPage";
import { pages } from "./src/components/database";
import "./src/styles/nav.css"
import "./index.css"


const router = new HistoryRouter();
for (const data of pages) {
    router.route('/', () => lentaPage(...Object.values(data)));
}
router.route('/basket', () => basketPage());
router.route('/profile', () => profilePages());
router.route('/delivery', () => deliveryPages());
router.route('/address', () => addressPage());

router.init();