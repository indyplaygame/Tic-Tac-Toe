import { setCookie, getCookie } from "./util.js";
import { auth, joinGame, refreshGameList } from "./online.js";
import { LANGUAGES } from "./language.js";

const theme_switch = document.querySelector('.theme-switch input');
const language_select = document.querySelector('.language-select');
const mode_selector = document.querySelector('.mode-selector');
const game_container = document.querySelector('.game-container');
const help_dialog = document.querySelector('.help');
const create_online_game = document.querySelector('.online-pvp .create-game');
const join_online_game = document.querySelector('.online-pvp .join-game');
const leave_online_game = document.querySelector('.online-pvp .leave-game');

const openHelp = () => help_dialog.classList.remove('hide');
const closeHelp = () => help_dialog.classList.add('hide');
const openCreateGame = () => {
    create_online_game.querySelector("form").reset();
    create_online_game.classList.remove('hide');
};
const closeCreateGame = () => create_online_game.classList.add('hide');
const openJoinGame = () => {
    join_online_game.querySelector("form").reset();
    join_online_game.querySelector(".game-password").classList.add('hide');
    join_online_game.classList.remove('hide');
}
const closeJoinGame = () => join_online_game.classList.add('hide');
const openLeaveGame = () => leave_online_game.classList.remove('hide');
const closeLeaveGame = () => leave_online_game.classList.add('hide');
const changeTheme = (theme) => document.body.setAttribute("data-theme", theme);

const changeMode = (mode) => {
    const local_pvp = game_container.querySelector('.local-pvp');
    const online_pvp = game_container.querySelector('.online-pvp');
    const vs_bot = game_container.querySelector('.vs-bot');

    local_pvp.classList.remove('active');
    online_pvp.classList.remove('active');
    vs_bot.classList.remove('active');

    switch(mode) {
        case 'local_pvp':
            local_pvp.classList.add('active');
            break;
        case 'online_pvp':
            online_pvp.classList.add('active');
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
    setCookie("language", lang, "/", 30);

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

const changeHelpTab = (tab) => {
    const tabs = help_dialog.querySelectorAll('.help-tab');
    const select = help_dialog.querySelector('.help-page-select');
    const selected = select.querySelector('.selected b');
    const option = select.querySelector(`.options .option[val="${tab}"] p`);

    selected.innerHTML = option.innerHTML;
    selected.setAttribute('data-lang', option.getAttribute('data-lang'));

    tabs.forEach(t => {
        if(t.classList.contains(tab)) t.classList.remove('hide');
        else t.classList.add('hide');
    });
};

const changeGameVisibility = (visibility) => {
    const password_field = create_online_game.querySelector('.game-password');
    const input = password_field.querySelector('input');
    input.value = "";

    if(visibility === "private") password_field.classList.remove('hide');
    else password_field.classList.add('hide');
}

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
    setCookie("theme", theme_switch.checked ? "dark" : "light", "/", 30);
});

window.openHelp = openHelp;
window.closeHelp = closeHelp;
window.openCreateGame = openCreateGame;
window.closeCreateGame = closeCreateGame;
window.openJoinGame = openJoinGame;
window.closeJoinGame = closeJoinGame;
window.openLeaveGame = openLeaveGame;
window.closeLeaveGame = closeLeaveGame;
window.changeMode = changeMode;
window.changeLanguage = changeLanguage;
window.changeHelpTab = changeHelpTab;
window.changeGameVisibility = changeGameVisibility;

changeLanguage(getCookie("language") || "en");
changeTheme(getCookie("theme") || "light");
theme_switch.checked = getCookie("theme") === "dark";

document.addEventListener('DOMContentLoaded', async () => {
    await auth();
    await refreshGameList();

    const params = new URLSearchParams(window.location.search);
    if(params.has('local-pvp')) mode_selector.querySelector('.option[val="local_pvp"]').click();
    if(params.has('online-pvp')) mode_selector.querySelector('.option[val="online_pvp"]').click();
    if(params.has('vs-bot')) mode_selector.querySelector('.option[val="vs_bot"]').click();

    if(params.has('join')) {
        const game_id = params.get('join');
        if(!game_id) return;

        const password = params.get('password');

        mode_selector.querySelector('.option[val="online_pvp"]').click();
        await joinGame(game_id, password);
    }
});