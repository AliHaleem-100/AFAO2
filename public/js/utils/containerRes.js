export function containerRes(header) {
    let HTML = document.documentElement;
    if (innerWidth < 600 || innerHeight <= 400) return
    else if (innerWidth > 1400 || innerHeight >= 1000) {
        return HTML.style.setProperty("--section-height", "720px")
    }
    HTML.style.setProperty("--section-height", `${innerHeight - header.clientHeight}px`);

}