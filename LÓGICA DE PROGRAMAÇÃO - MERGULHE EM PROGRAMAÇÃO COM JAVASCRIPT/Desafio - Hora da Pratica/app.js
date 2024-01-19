alert = ("Boas vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert("Erro! Preencha todos os campos");

let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

let nome1 = prompt("Entre com o seu nome");

let idade1 = prompt("Entre com a sua idade");
if(idade >= 18){
    alert("Pode tirar Habilitação!");
}else{
    alert("Não pode tirar habilitação!");
}