"use strict";
let nome;
nome = 'Igor';
nome = 23;
console.log(typeof (nome));
let idade = 15;
let nome2 = 'Igor';
let qualquerCoisa = 'Igor';
function processData(data) {
    console.log(data);
}
processData({ name: "Igor", age: 26 });
processData("Uma string qualquer");
function handleSubmit(formData) {
    console.log(formData);
}
handleSubmit({ name: "Igor", age: 26 });
handleSubmit(["um", "array", "de", "strings"]);
