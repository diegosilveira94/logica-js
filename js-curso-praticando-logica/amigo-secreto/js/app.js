let amigos = [];
function adicionar() {
    // armazena nomes digitados na lista
    let amigo = document.getElementById('nome-amigo').value.toUpperCase();
    if (amigo == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(amigo)) {  
        alert('Nome já adicionado!');
        return;
    }

    let listaAmigos = document.getElementById('lista-amigos');

    amigos.push(amigo);
    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = amigo;
    } else {
        listaAmigos.textContent += ', ' + amigo;
    }
    amigo = '';
}

function sortear() {
    if (amigos.length <= 4) {
        alert('Adicione pelo menos 4 amigos');
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' → ' + amigos[0] + '<br>';
        } else {
        sorteio.innerHTML += amigos[i] + ' → ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}