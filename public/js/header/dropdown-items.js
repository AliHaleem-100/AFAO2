const NAV_ITEMS = document.querySelectorAll(".nav-item");
const DROPDOWN_ITEMS = {
  about: [
    {
      item: "Executive Summary",
      link: "/about/executive_summary",
    },
    {
      item: "Our Story",
      link: "/about/story",
    },
    {
      item: "Our Mission",
      link: "/about/mission",
    },
    {
      item: "Our Vision",
      link: "/about/vision",
    },
    {
      item: "Our Core Value",
      link: "/about/core_value",
    },
    {
      item: "Leadership",
      link: "/about/leadership",
    },
    {
      item: "Transparency",
      link: "/about/transparency",
    },
    {
      item: "Annual Report",
      link: "/about/annual_report",
    },
  ],
  programs: [
    {
      item: "English Learning",
      link: "/about/english_learning",
    },
    {
      item: "Workforce Development",
      link: "/about/workforce_development",
    },
    {
      item: "Financial Literacy",
      link: "/about/financial_literacy",
    },
    {
      item: "DMV Access & Assistance",
      link: "/about/dmv_access_and_assistance",
    },
    {
      item: "Employer Referral & Job Support",
      link: "/about/employer_ref_and_job_support",
    },
  ],
  volunteer: [
    {
      item: "Volunteer Overview",
      link: "/volunteer/overview",
    },
    {
      item: "Why Volunteer",
      link: "/volunteer/why_volunteer",
    },
    {
      item: "Volunteer Opportunities",
      link: "/volunteer/volunteer_opportunities",
    },
    {
      item: "Area of Services",
      link: "/volunteer/area_of_services",
    },
    {
      item: "Volunteer Eligibility",
      link: "/volunteer/volunteer_eligibility",
    },
    {
      item: "Volunteer Process",
      link: "/volunteer/volunteer_process",
    },
    {
      item: "Training & Orientation",
      link: "/volunteer/training_and_orientation",
    },
    {
      item: "Volunteer Expectation",
      link: "/volunteer/volunteer_expectation",
    },
    {
      item: "Volunteer Benefits",
      link: "/volunteer/volunteer_benefits",
    },
    {
      item: "Volunteer Policies",
      link: "/volunteer/volunteer_policies",
    },
    {
      item: "FAQ",
      link: "/volunteer/faq",
    },
  ],
};

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
