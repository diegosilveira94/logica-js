let contadorAlugados = 0;

function alterarStatus(id){
    // recebe id da li
    let gameClicado  = document.getElementById(`game-${id}`);

    // recebe elemento da class
    let image = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');  

    // verifica status da imagem e botao
    if(image.classList.contains('dashboard__item__img--rented')) {
        let confirmaDevolucao = prompt('Você confirma a devolução (S/N): ').toUpperCase(); // desafio 01 do curso da alura
        if(confirmaDevolucao === 'S') {
            image.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');            
        } else {
            return;
        }
    } else {
        image.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';  
        botao.classList.add('dashboard__item__button--return');
        contadorAlugados++;         
    }
    console.log(`Quantidade de jogos aluguados: ${contadorAlugados}`); //desafio 2 do curso da alura
}
// desafio 03 do curso da alura
function ordenarTresNumeros(num1, num2, num3) {
        numerosOrdenados = [num1, num2, num3].sort((x, y) => x - y);
        console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}
let listaNumeros = [];
for(let i = 0; i < 3; i++) {
    let numero = parseInt(prompt(`Digite o ${i+1}º número: `));
    listaNumeros.push(numero);
}

ordenarTresNumeros(listaNumeros[0], listaNumeros[1], listaNumeros[2]);