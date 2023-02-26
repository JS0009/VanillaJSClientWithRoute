import { renderMain } from "../pages/main.template.js"

let route, updatestate, contentEl, navEl

contentEl = document.querySelector('.content')
navEl = document.querySelector('.nav')


route = {
    '/': '<h1>Welcome</h1>',
    main: renderMain,
    aboute: "This is the <strong>aboute<strong/>page",
    downloads: "This is the <strong>downloads<strong/>page",
}

updatestate = (state) => {
    if (!state) return
    contentEl.innerHTML = route[state.page]
}

window.addEventListener('popstate', (event) => {
    updatestate(event.state)
})
window.addEventListener('load', updatestate(history.state))
navEl.addEventListener('click', function (event) {
    let state
    if (event.target.tagName !== 'A') return
    state = {
        page: event.target.getAttribute('href')
    }
    console.log(state.page)
    history.pushState(state, '', state.page)
    updatestate(state)
    event.preventDefault()
})
