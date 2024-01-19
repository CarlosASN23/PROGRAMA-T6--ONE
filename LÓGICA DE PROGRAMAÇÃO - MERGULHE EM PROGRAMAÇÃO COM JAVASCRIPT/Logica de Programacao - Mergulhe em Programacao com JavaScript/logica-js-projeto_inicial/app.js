alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let numeroUsuario;
let tentativas = 1;

// Bloco de comando While para executar o código enquanto a condição de acertar o numeroSecreto não for atendida
while(true){
   
    let numeroUsuario = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Bloco condicional para verificação se o numero do usuario foi igual ao numero secreto
    if(numeroUsuario == numeroSecreto){
        break;

    }else{
        
        if(numeroSecreto > numeroUsuario){
            alert(`O número secreto é maior que o ${numeroUsuario}`);  

        }else{
            alert(`O número secreto é menor que o ${numeroUsuario}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;  
    }
}

let palavaTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você é Ninja! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavaTentativa}`)

/*if (tentativas > 1){

    alert("Você é Ninja!\n"+
        `Você acertou o número Secreto ${numeroSecreto}`+
        `\nCom ${tentativas} tentativas`);
}else{

    alert("Você é Ninja!\n"+
    `Você acertou o número Secreto ${numeroSecreto}`+
    `\nCom ${tentativas} tentativa`);
}
*/