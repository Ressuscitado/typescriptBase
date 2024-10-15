"use strict";
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Ingles"] = 1] = "Ingles";
    Idioma[Idioma["Espanhol"] = 2] = "Espanhol";
    Idioma[Idioma["Mandarim"] = 3] = "Mandarim";
})(Idioma || (Idioma = {}));
console.log(Idioma);
var Dia;
(function (Dia) {
    Dia["Segund"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Doming"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia);
var StatusPedido;
(function (StatusPedido) {
    StatusPedido[StatusPedido["Pendente"] = 0] = "Pendente";
    StatusPedido[StatusPedido["Enviado"] = 1] = "Enviado";
    StatusPedido[StatusPedido["Entregue"] = 2] = "Entregue";
    StatusPedido[StatusPedido["Cancelado"] = 3] = "Cancelado";
})(StatusPedido || (StatusPedido = {}));
let statusAtual = StatusPedido.Pendente;
console.log(statusAtual);
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
function acessarSistema(role) {
    if (role === Role.Admin) {
        console.log("Acesso total concedido.");
    }
    else if (role === Role.User) {
        console.log("Acesso limitado concedido.");
    }
}
var Tamanho;
(function (Tamanho) {
    Tamanho[Tamanho["Pequeno"] = 0] = "Pequeno";
    Tamanho[Tamanho["M\u00E9dio"] = 1] = "M\u00E9dio";
    Tamanho[Tamanho["Grande"] = 2] = "Grande";
})(Tamanho || (Tamanho = {}));
function escolherTamanho(tamanho) {
    if (tamanho === Tamanho.Grande) {
        console.log("Você escolheu o tamanho grande.");
    }
}
escolherTamanho(Tamanho.Médio);
(function (Dia) {
    Dia[Dia["Domingo"] = 0] = "Domingo";
    Dia[Dia["Segunda"] = 1] = "Segunda";
    Dia[Dia["Ter\u00E7a"] = 2] = "Ter\u00E7a";
})(Dia || (Dia = {}));
let dia = Dia.Segunda;
console.log(dia);
console.log(Dia[1]);
function acessarSistema1(role) {
    if (role === "ADMIN") {
        console.log("Acesso total concedido.");
    }
}
const Role2 = {
    Admin: "ADMIN",
    User: "USER",
    Guest: "GUEST"
};
function acessarSistema2(role) {
    if (role === Role2.Admin) {
        console.log("Acesso total concedido.");
    }
}
