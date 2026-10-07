const NAV_MENU = document.querySelector(".nav-menu");
const NAV_MENU_BTN = document.querySelector(".nav-menu-btn");
const DROPDOWNS = document.querySelectorAll(".dropdown");
const OVERLAY = document.querySelector(".overlay");

// general js

// for nav-menu
NAV_MENU_BTN.addEventListener("click", (e) => {
  NAV_MENU_BTN.classList.toggle("active");
  NAV_MENU.classList.toggle("active");
  OVERLAY.classList.toggle("active");
});

const isMobile = () => window.innerWidth <= 992;

DROPDOWNS.forEach((dropdown) => {
  const navLink = dropdown.previousElementSibling;
  const arrow = navLink.children[1];

  navLink.addEventListener("click", (e) => {
    if (!isMobile()) return; // desktop: let the link work normally
    e.preventDefault();

    const wasOpen = dropdown.classList.contains("active");

    // close all dropdowns and reset each one's OWN arrow
    DROPDOWNS.forEach((d) => {
      d.classList.remove("active");
      d.previousElementSibling.children[1].classList.remove("active");
    });

    // open this one only if it was closed before
    if (!wasOpen) {
      dropdown.classList.add("active");
      arrow.classList.add("active");
      updateScroll(dropdown);
      dropdown.addEventListener("scroll", () => {
        updateScroll(dropdown);
      });
    }
    // handling the scrollbar
  });
});

function updateScroll(dropdown) {
  const visible = dropdown.clientHeight;
  const total = dropdown.scrollHeight;
  const maxScroll = total - visible;

  // nothing to scroll: hide the thumb and stop
  if (maxScroll <= 0) {
    dropdown.style.setProperty("--thumb-height", "0px");
    return;
  }

  const thumbHeight = (visible / total) * visible;
  const maxThumbMove = visible - thumbHeight; // fix 1: visible, not total

  const progress = dropdown.scrollTop / maxScroll;
  const thumbPos = progress * maxThumbMove;
  const finalPos = dropdown.scrollTop + thumbPos;

  dropdown.style.setProperty("--scrollbar-height", `${total}px`); // fix 2 + 3
  dropdown.style.setProperty("--thumb-height", `${thumbHeight}px`); // fix 2 + 3
  dropdown.style.setProperty("--top-position", `${finalPos}px`);
}

OVERLAY.addEventListener("click", (e) => {
  NAV_MENU.classList.remove("active");
  NAV_MENU_BTN.classList.remove("active");
  OVERLAY.classList.remove("active");
});
