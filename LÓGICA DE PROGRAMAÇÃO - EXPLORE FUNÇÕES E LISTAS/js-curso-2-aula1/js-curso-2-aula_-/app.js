//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaNumerosSorteados = [];
let limiteLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function numeroTentativas(){

    if(tentativas > 1){
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} tentativas`;
    }else{
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} tentativa`;
    }

    return mensagemTentativas;
}

function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){

    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute(){

    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){

        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}`;
        
        exibirTextoNaTela('h1','Parabéns, você acertou!');
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{

        if(chute > numeroSecreto){

            exibirTextoNaTela('p',`O número secreto é  menor que o número ${chute}`)

        }else{

            exibirTextoNaTela('p',`O número secreto é maior que o número ${chute}`);

        }
    }
    tentativas ++;
    limparCampo();
}

function gerarNumeroAleatorio(){

    let numeroEscolhido = parseInt(Math.random() * limiteLista + 1);

    let quantidadeElementosLista = listaNumerosSorteados.length;

    if(quantidadeElementosLista == limiteLista){

        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){

        return gerarNumeroAleatorio();

    }else{

        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true); // habilitar o botão disabled novamente
}