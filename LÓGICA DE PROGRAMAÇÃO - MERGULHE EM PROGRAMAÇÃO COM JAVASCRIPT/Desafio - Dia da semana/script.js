// Dia da Semana
let diaDaSemana = prompt("Qual o dia da semana");
if (diaDaSemana == "Sábado"|| diaDaSemana == "Domingo"){
    alert("Bom final de semana");
}else{
    alert("Boa Semana");
}

// Verificação do numero Positivo - Negativo
let numero01 = prompt("Digite um numero");
if(numero01 < 0){
    alert("Você digitou um número negative");
}else if(numero01 > 0){
    alert("Você digitou um número positive");
}else{
    alert("Digite um valor de número válido");
}

//Pontuação
let pontuacao = prompt("Digite o valor da pontuação: ");
if(pontuacao >= 100){
    alert("Parabéns! Você venceu!");
}else{
    alert("Tente novamente para ganhar");
}