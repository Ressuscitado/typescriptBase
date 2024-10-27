"use strict";
const config81 = {
    host: "localhost",
    port: 8080
};
const host81 = "example.com";
const port81 = 3000;
console.log(host81, port81);
console.log(typeof host81, typeof port81);
const config81_ = {
    host: "localhost",
    port: 8080
};
const colors81 = ["red", "green"];
const user81 = {
    name: "Alice",
    role: "admin",
};
const pessoa81 = {
    localNascimento: 'São Paulo',
    residenciaAtual: { x: 10, y: 20 },
};
console.log(pessoa81.localNascimento.toUpperCase());
const config = {
    host: "localhost",
    port: 8080,
    tryReconnect: () => true,
    poolsize: 10,
};
function connect81() {
    let { host, port, tryReconnect } = config;
    createConnection81(host, `${port}`, tryReconnect(), 10);
}
