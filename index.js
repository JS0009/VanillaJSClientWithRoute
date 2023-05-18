import HistoryRouter from "./routes/router";
import basketPage from "./components/pages/basketPage";
import profilePages from "./components/pages/profilePages";
import deliveryPages from "./components/pages/deliveryPage";
import addressPage from "./components/pages/addressPage";
import lentaPage from "./components/pages/lentaPage";
import './styles/components/nav.css'
import './styles/common.css'


const router = new HistoryRouter();

router.route('/', () => lentaPage());
router.route('/basket', () => basketPage());
router.route('/profile', () => profilePages());
router.route('/delivery', () => deliveryPages());
router.route('/address', () => addressPage());

router.init();