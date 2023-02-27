
import { route } from "./routes.js"

let updatestate, contentEl, navEl

contentEl = document.querySelector('.content')
navEl = document.querySelector('.nav')




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
