import DROPDOWN from "../header/header-data.js"
const PROGRAMS_COL = document.getElementById('programs-col');
const PROGRAMS = DROPDOWN["programs"]
PROGRAMS_COL.innerHTML += PROGRAMS.map((program) => {
    return `<a href="${program.link}">${program.item}</a>`
}).join("")

