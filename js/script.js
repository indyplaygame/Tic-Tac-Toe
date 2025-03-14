import { setCookie, getCookie } from "./util.js";
import { LANGUAGES } from "./language.js";

const theme_switch = document.querySelector('.theme-switch input');
const language_select = document.querySelector('.language-select');
const game_container = document.querySelector('.game-container');
const help_dialog = document.querySelector('.help');

const openHelp = () => help_dialog.style.display = 'block';
const closeHelp = () => help_dialog.style.display = 'none';
const changeTheme = (theme) => document.body.setAttribute("data-theme", theme);

const changeMode = (mode) => {
    const local_pvp = game_container.querySelector('.local-pvp');
    const vs_bot = game_container.querySelector('.vs-bot');

    local_pvp.classList.remove('active');
    vs_bot.classList.remove('active');

    switch(mode) {
        case 'local_pvp':
            local_pvp.classList.add('active');
            break;
        case 'vs_bot':
            vs_bot.classList.add('active');
            break;
    }

    game_container.classList.remove("hidden");
};

const changeLanguage = (lang) => {
    const language = LANGUAGES[lang];
    const translations = language.translations;

    document.documentElement.lang = lang;
    setCookie("language", lang, 30, "/");

    for(const key in translations) {
        const elements = document.querySelectorAll(`[data-lang="${key}"]`);
        elements.forEach(element => element.innerHTML = translations[key]);
    }

    const selected = language_select.querySelector('summary .selected');
    const flag = selected.querySelector('img.flag');
    const name = selected.querySelector('p.name');
    flag.src = language.flag;
    name.innerHTML = language.name;
};

Object.keys(LANGUAGES).forEach(key => {
    const options = language_select.querySelector('.options');
    const lang = LANGUAGES[key];

    const option = document.createElement('div');
    option.classList.add('option');
    option.setAttribute('val', key);
    option.innerHTML = `<img class="flag" src="${lang.flag}" alt="${lang.name}"><p class="name">${lang.name}</p>`;
    options.appendChild(option);
});

theme_switch.addEventListener('change', () => {
    changeTheme(theme_switch.checked ? "dark" : "light");
    setCookie("theme", theme_switch.checked ? "dark" : "light", 30, "/");
});

window.openHelp = openHelp;
window.closeHelp = closeHelp;
window.changeMode = changeMode;
window.changeLanguage = changeLanguage;

changeLanguage(getCookie("language") || "en");
changeTheme(getCookie("theme") || "light");
theme_switch.checked = getCookie("theme") === "dark";