import { pages } from './pages.js';

const routes = [
    { path: '/home' },
    { path: '/about' },
    { path: '/contact' },
];

export function router() {
    let potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        };
    });

    let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[1],
            isMatch: true,
        };
    }
    loadPage(match)
}
async function loadPage(matchesRoute) {
    const page = await pages.find((p) => p.name === matchesRoute.route.path.split('/')[1]);
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

window.addEventListener('popstate', router);