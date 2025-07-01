function comprar() {
    // armazenar tipo e quantidade de ingressos
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdeIngresso = parseInt(document.getElementById('qtd').value);
    // validacao para numero negativos
    if (qtdeIngresso < 0) {
        alert('Digite um número positivo');
        return;
    }
    // alterar ingressos disponiveis
    if(tipoIngresso === 'pista') {
        comprarPista(qtdeIngresso);
    }
    if(tipoIngresso === 'inferior') {
        comprarInferior(qtdeIngresso);
    }
    if(tipoIngresso === 'superior') {
        comprarSuperior(qtdeIngresso);
    }
}

function comprarPista(qtd) {
    let qtdDisponivel = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdDisponivel) {
        alert('Quantidade indisponível para ingresso pista')
    } else {
        qtdDisponivel -= qtd;
        document.getElementById('qtd-pista').textContent = qtdDisponivel;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdDisponivel = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdDisponivel) {
        alert('Quantidade indisponível para ingresso pista')
    } else {
        qtdDisponivel -= qtd;
        document.getElementById('qtd-superior').textContent = qtdDisponivel;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdDisponivel = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdDisponivel) {
        alert('Quantidade indisponível para ingresso pista')
    } else {
        qtdDisponivel -= qtd;
        document.getElementById('qtd-inferior').textContent = qtdDisponivel;
        alert('Compra realizada com sucesso!');
    }
}