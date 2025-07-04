function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // caso o numero 'de' seja maior que o 'ate'
    if(de >= ate) {
    alert('O número inicial é maior que o número limite.');
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';    
    return;
    }

    // caso o intervalo seja maior que o numero inicial e final
    let diferencaNumeroInicialFinal = ate - de;
    if(diferencaNumeroInicialFinal < quantidade) {
        alert('O intervalo é maior entre o número inicial e final.')
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        return;
    }

    // uso da função gerar numero aleatorios
    let sorteados = [];
    let numero;
    for(let i = 0; i < quantidade; i++) {
        numero = geradorNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)) {
            numero = geradorNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    // inclusão dos numeros aleatorios no elemento resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
    alterarStatusBotaoSortear()
    alterarStatusBotaoReiniciar();
}

function geradorNumeroAleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function alterarStatusBotaoSortear() {
    let botao = document.getElementById('btn-sortear');
    if (botao.classList.contains('container__botao')) {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    } else {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');        
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotaoReiniciar();
    alterarStatusBotaoSortear();
}