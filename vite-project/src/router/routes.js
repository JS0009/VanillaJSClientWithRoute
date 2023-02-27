import { renderMain } from "../pages/main.template.js"

let route;

route = {
    '/': '<h1 style="text-align:center;">Welcome to my single page aplication</h1>',
    'main': renderMain,
    'aboute': "This is the <strong>aboute<strong/>page",
    'downloads': "This is the <strong>downloads<strong/>page",
};

export { route };