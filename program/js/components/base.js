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

const fetchMarkdown = async function (url) {
    try {
        const text = await fetchText(url);
        return marked.parse(text); // Parse Markdown to HTML
    } catch (error) {
        console.error(`Could not get Markdown file: ${error}\n${url}`);
    }
}

const getSiblings = function (element) {
    // 获取父元素并从父元素获取所有子元素（包括当前元素）
    var siblings = Array.from(element.parentNode.children);

    // 过滤掉当前元素，只保留兄弟元素
    return siblings.filter(function (sibling) {
        return sibling !== element;
    });
}

const removeClassFromSiblings = function (element, className) {
    // 获取父元素并从父元素获取所有子元素（包括当前元素）
    const siblings = Array.from(element.parentNode.children);

    // 遍历所有兄弟元素，移除指定的类名
    siblings.forEach(function (sibling) {
        if (sibling !== element && sibling.classList.contains(className)) {
            sibling.classList.remove(className);
        }
    });
}

export { capitalize, fetchJson, fetchText, fetchMarkdown, getSiblings, removeClassFromSiblings };