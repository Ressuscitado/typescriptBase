"use strict";
const myPair88 = {
    first: 1,
    second: 'hello'
};
console.log(myPair88);
async function fetchJason88(url) {
    const response = await fetch(url);
    const headers = {};
    response.headers.forEach((value, key) => {
        headers[key] = value;
    });
    const data = await response.json();
    return {
        data: data,
        status: response.status,
        statusText: response.statusText,
        headers
    };
}
(async () => {
    const response = await fetchJason88("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response.data.title);
})();
