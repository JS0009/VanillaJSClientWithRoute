let links, updatestate, contentEl, navEl;

contentEl = document.querySelector('.content');
navEl = document.querySelector('.nav')

links = {
    main: "This is the <strong>main<strong page/>",
    aboute: "This is the <strong>aboute<strong page",
    downloads: "This is the <strong>downloads<strong/> page"
}

updatestate = (state) => {
    if (!state) return
    contentEl.innerHTML = links[state.page]
}

navEl.addEventListener('click', function (e) {
    let state
    if (e.target.tagName !== 'A') return;
    state = {
        page: e.target.getAttribute('href')
    }
    history.pushState(state, '', state.page)
    updatestate(state)
    e.preventDefault()
})