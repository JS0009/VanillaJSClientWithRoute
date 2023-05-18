import aboutPages from "./components/pages/aboutPage";
import contactPage from "./components/pages/contactPage";
import homePage from "./components/pages/homePage";
import HistoryRouter from "./routes/router";

const router = new HistoryRouter();

router.route('/home', () => homePage());
router.route('/about', () => aboutPages());
router.route('/contact', () => contactPage());

router.init();