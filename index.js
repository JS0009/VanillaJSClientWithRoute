import HistoryRouter from "./router";

const router = new HistoryRouter();

router.route('/home', () => `<h1>Welcome to the homepage</h1>`);
router.route('/about', () => `<h1>About us</h1><p>We're a small company...</p>`);
router.route('/contact', () => `<h1>Contact us</h1><form><input type="text" placeholder="Name"/><input type="email" placeholder="Email"/><textarea placeholder="Message"></textarea><button type="submit">Send</button></form>`);

router.init();