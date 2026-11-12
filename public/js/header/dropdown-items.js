const NAV_ITEMS = document.querySelectorAll(".nav-item");
import DROPDOWN_ITEMS from "./header-data.js"

NAV_ITEMS.forEach((item, index) => {
  if (item.hasAttribute("hasDropdown")) {
    let liHTML = [];

    // get the values of dropdown from the data by name attribute.
    DROPDOWN_ITEMS[`${item.attributes.getNamedItem("name").value}`].forEach(
      (itemValue) => {
        liHTML.push(`    
                  <li class="dropdown-item">
                      <a class="dropdown-link" href="${itemValue.link}">
                          ${itemValue.item}
                      </a>
                    </li>
                        `);
      },
    );
    let dropdownHTML = `
                  <div class="dropdown">
                      <ul class="dropdown-menu">
                          ${liHTML.join("")}
                      </ul>
                  </div>`;

    item.innerHTML += dropdownHTML;
  }
});
