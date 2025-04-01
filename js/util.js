import { LANGUAGES } from "./language.js";

export const BASE_URL = window.location.href.replace(window.location.search, '');
export const API_URL = "http://localhost:8080";
export const WEBSOCKET_URL = "ws://localhost:8080";

export const GameVisibility = {
    PUBLIC: "PUBLIC",
    UNLISTED: "UNLISTED",
    PRIVATE: "PRIVATE"
};

export const HttpStatus = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500
};

export const HttpStatusCode = {
    200: "OK",
    201: "Created",
    204: "No Content",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    409: "Conflict",
    500: "Internal Server Error"
};

export const WebSocketStatus = {
    BAD_REQUEST: 4400,
    UNAUTHORIZED: 4401,
    FORBIDDEN: 4403,
    NOT_FOUND: 4404,
    INTERNAL_SERVER_ERROR: 4500
};

export const abs = (x) => {
    return x < 0 ? -x : x;
};

export const sign = (x) => {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
};

export const min = (a, b) => {
    return a < b ? a : b;
}

export const max = (a, b) => {
    return a > b ? a : b;
}

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

export const setCookie = (name, value, path, expires, options) => {
    let cookie = `${name}=${value}; path=${path}`;

    if(expires) cookie += `; max-age=${expires * 24 * 3600}`;

    if(options) {
        if(options.secure) cookie += "; Secure";
        if(options.same_site) cookie += `; SameSite=${options.same_site}`;
    }

    document.cookie = cookie;
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

export const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text).then(r => {});

    if(message) showMessage("success", message);
};

export const showMessage = (type, message, duration) => {
    const messages = document.querySelector('.messages');

    const messageElement = document.createElement("div");
    messageElement.classList.add("message", type);

    const text = document.createElement("p");
    text.textContent = message;
    messageElement.appendChild(text);

    const close = document.createElement("i");
    close.classList.add("ti", "ti-x");
    close.addEventListener('click', () => messageElement.remove());
    messageElement.appendChild(close);

    const progress = document.createElement("div");
    progress.classList.add("progress");
    messageElement.appendChild(progress);

    if(duration) messageElement.style.setProperty("--duration", `${duration}ms`);
    setTimeout(() => messageElement.remove(), duration || 4000);

    messages.appendChild(messageElement);
}

export const removeListeners = (element) => {
    const clone = element.cloneNode(true);
    element.replaceWith(clone);
    return clone;
}