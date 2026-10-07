const data = [
  {
    nativeLanguage: "English",
    languageEnglish: "English",
    isRTL: false,
    iso: "en",
  },
  {
    nativeLanguage: "Español",
    languageEnglish: "Spanish",
    isRTL: false,
    iso: "es",
  },
  {
    nativeLanguage: "دری",
    languageEnglish: "Dari",
    isRTL: true,
    iso: "fa",
  },
  {
    nativeLanguage: "پشتو",
    languageEnglish: "Pashto",
    isRTL: true,
    iso: "ps",
  },
];

const LANG_SWITCHER = document.getElementById("langSwitcher"); // <detail>
const languageList = LANG_SWITCHER.children[1]; // <ul>

window.addEventListener("DOMContentLoaded", () => {
  let savedISO = localStorage.getItem("activeLang");
  let activeEL =
    data.find((d) => {
      return d.iso === savedISO;
    }) ?? data[0];

  htmlLangHandler(activeEL.iso); // add languages when website loads.

  languageList.addEventListener("click", (e) => {
    const li = e.target.closest(".lang-option");
    if (!li) {
      return;
    }

    const index = li.dataset.index;

    localStorageHandler(index);
    activeEL = data[index];
    htmlLangHandler(activeEL.iso);
  });
});

function htmlLangHandler(iso) {
  languageList.innerHTML = data
    .map((lang, i) => {
      return `
    <li class="lang-option ${iso === lang.iso ? "active" : ""}" data-index="${i}">
      <a href="?lang=${lang.iso}" class="lang-link" ${lang.isRTL ? 'dir="rtl"' : ""}>
        <span class="lang-native">${lang.nativeLanguage}</span>
        <span class="lang-english">${lang.languageEnglish}</span>
      </a>
    </li>`;
    })
    .join("");
}

function localStorageHandler(index = 0) {
  localStorage.setItem("activeLang", data[index].iso);
}
