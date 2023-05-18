import HistoryRouter from "./routes/router";
import basketPage from "./components/pages/basketPage";
import profilePages from "./components/pages/profilePages";
import deliveryPages from "./components/pages/deliveryPage";
import addressPage from "./components/pages/addressPage";
import './styles/components/nav.css'
import './styles/common.css'


const router = new HistoryRouter();

router.route('/basket', () => basketPage());
router.route('/profile', () => profilePages());
router.route('/delivery', () => deliveryPages());
router.route('/address', () => addressPage());

router.init();