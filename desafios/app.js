//     ex001
// // Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do Desafio';

//     ex002
// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
// function verificarConsole() {
//     console.log('O botão foi clicado');
// }
//     ex003
// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
// function verificarAlerta()
// {
//     alert('Eu amo JS!');
// }
//     ex004
// // Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Cidades do Brasil';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Digite 1 cidade do Brasil:';

// function verificarPrompt()
// {
//     let input = document.getElementById("textInput"); // Captura o elemento do texto input
//     let cidade = input.value; // Recebe string do input
//     alert(`Estive em ${cidade} e lembrei de você.`)
// }
//     ex005
//  clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Só de soma';

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Calculadora';
// function verificarSomar()
// {
//     num1 = parseInt(prompt('Digite o primeiro número: '));
//     num2 = parseInt(prompt('Digite o segundo número: '));
//     resultado = num1 + num2;
//     alert(`O resultado da soma de ${num1} e ${num2} é ${resultado}`);
// }

//     ex006
// Criar uma função que exibe "Olá, mundo!" no console.
// function helloWorld() {
//     return 'Hello World';
// }

// console.log(helloWorld());

    // ex007
// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function nomeUsuario(nome) {
//     return console.log(`Olá, ${nome}!`);
// }
// nomeUsuario('Diego Silveira');

//     ex008
// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function dobroNumero(numero) {
//     return numero * 2;
// }
// console.log(dobroNumero(50));

//     ex009
// // Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function mediaTresNumeros(num1,num2,num3) {
//     return (num1 + num2 + num3) / 3;
// }
// console.log(mediaTresNumeros(num1=3,num2=5,num3=8));

//     ex010
// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// function maiorNumero(num1,num2) {
//     if(num1 > num2){
//         return num1;
//     } else {
//         return num2;
//     }
// }
// console.log(maiorNumero(num1=500,num2=50));

//     ex011
// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function numeroAoQuadrado(numero) {
    return numero * numero;
}
console.log(numeroAoQuadrado(5));