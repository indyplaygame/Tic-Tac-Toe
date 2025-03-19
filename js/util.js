import { LANGUAGES } from "./language.js";

export const API_URL = "http://localhost:8080";
export const WEBSOCKET_URL = "ws://localhost:8080";

export const GameVisibility = {
    PUBLIC: "PUBLIC",
    UNLISTED: "UNLISTED",
    PRIVATE: "PRIVATE"
};

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const hash = (data) => {
    let hash = 0, multiplier = 1;
    data.flat().forEach((item) => {
        hash += (item === -1 ? 2 : item) * multiplier;
        multiplier *= 3;
    });

    return hash;
};

export const setCookie = (cookie, value, path, expires) => {
    const expiry_date = new Date().getDate() + expires * 24 * 3600000;
    if(expires) document.cookie = `${cookie}=${value}; expires=${expiry_date}; path=${path}`;
    else document.cookie = `${cookie}=${value}; path=${path}`;
};

export const getCookie = (name) => {
    const cookies = `; ${document.cookie}`;
    const cookie = cookies.split(`; ${name}=`);
    if(cookie.length === 2) return cookie.pop().split(";").shift();

    return "";
};

export const getTranslation = (key) => {
    return LANGUAGES[document.documentElement.lang].translations[key];
};

export const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(r => {});
};