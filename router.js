import { pages } from './pages.js';

const routes = [
    { path: '/home' },
    { path: '/about' },
    { path: '/contact' },
];

async function loadPage() {
    const page = await pages.find((p) => p.name === location.pathname.split('/')[1]);
    console.log(page)
    if (page) {
        const newPage = document.createElement('div');
        newPage.innerHTML = page.content;

        const titleElement = document.createElement('h1');
        titleElement.textContent = page.title;

        document.title = page.title;

        const mainContent = document.getElementById('app');
        while (mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild);
        }
        mainContent.appendChild(titleElement);
        mainContent.appendChild(newPage);
    } else {
        console.log(`Page "${location.pathname}" not found.`);
    }
}

async function initRouter() {
    let potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        };
    });

    let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

    //console.log(match);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        };
    }

}

export function router() {
    initRouter().then(() => loadPage());
}

window.addEventListener('popstate', router);