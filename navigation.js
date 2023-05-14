export function navigateTo(url) {
    window.history.pushState(null, null, url);
    console.log(url)
}

