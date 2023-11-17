// Here are some commonly used utility functions

const capitalize = function (str) {
    if (str && typeof str === 'string') {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    return str;
}

const fetchJson = async function (url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Could not get JSON file: ${error}\n${url}`);
    }
}

const fetchText = async function (url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.text();
        return data;
    } catch (error) {
        console.error(`Could not get Text file: ${error}\n${url}`);
    }
}

export { capitalize, fetchJson, fetchText };