let heroContainer = document.querySelector(".hero-container");
let header = document.querySelector("header");
let headerHeight = header.clientHeight;

// avail height is reasonable for this.
// heroContainer.scrollHeight measure it from the browser height
// if use dev tool it screwed and overlapped with other elements.

window.addEventListener("DOMContentLoaded", update);
window.addEventListener("resize", update);

function update() {
  trustBarHandler();
  sectionHeightHandler();
}

// trust bar
function trustBarHandler() {
  // probably i won't need trust bar outside of of this block.
  let trustBar = document.querySelector(".trust-bar");
  if (innerWidth <= 768) {
    return (trustBar.style.marginTop = 0);
  }
  trustBar.style.marginTop = `-${trustBar.clientHeight / 2}px`;
}

function sectionHeightHandler() {
  if (screen.availHeight < 400 || screen.availHeight > 800) {
    document.documentElement.style.setProperty("--section-height", "720px");
  }
  document.documentElement.style.setProperty(
    "--section-height",
    `${innerHeight - headerHeight}px`,
  );
}
