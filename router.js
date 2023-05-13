
const pages = [
    {
        name: 'home',
        title: 'Welcome Home!',
        content: '<p>Click the buttons above to navigate.</p>',
    },
    {
        name: 'about',
        title: 'About Us',
        content: '<p>We are a team of developers.</p>',
    },
    {
        name: 'contact',
        title: 'Contact Us',
        content: '<address>123 Main St<br>Anytown, USA 12345</address>',
    },
];

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();

};

const router = async () => {
    const routes = [
        { path: '/home', view: loadPage },
        { path: '/about', view: loadPage },
        { path: '/contact', view: loadPage },
    ];

    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        };
    });
    let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        };
    }

    const view = await match.route.view(match.route);

    function loadPage(route) {
        const page = pages.find((p) => p.name === route.path.split('/')[1]);
        if (page) {
            console.log(page)
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
            console.log(`Page "${route.path}" not found.`);
        }
    }
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        if (event.target.matches('[data-link]')) {
            event.preventDefault();
            navigateTo(event.target.href);
        }
    });
    router();
});
