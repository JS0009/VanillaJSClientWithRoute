import { navigateTo } from './navigation.js';
import { router } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        if (event.target.matches('[data-link]')) {
            event.preventDefault();
            navigateTo(event.target.href);
            router();
        }
    });
    navigateTo('/home');
    router();
});