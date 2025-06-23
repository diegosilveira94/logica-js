//     ex001
// // Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do Desafio';
//=======================================================
//     ex002
// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
// function verificarConsole() {
//     console.log('O botão foi clicado');
// }
//=======================================================
//     ex003
// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
// function verificarAlerta()
// {
//     alert('Eu amo JS!');
// }
//=======================================================
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
//=======================================================
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
//=======================================================
//     ex006
// Criar uma função que exibe "Olá, mundo!" no console.
// function helloWorld() {
//     return 'Hello World';
// }
// console.log(helloWorld());
//=======================================================
    // ex007
// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function nomeUsuario(nome) {
//     return console.log(`Olá, ${nome}!`);
// }
// nomeUsuario('Diego Silveira');
//=======================================================
//     ex008
// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function dobroNumero(numero) {
//     return numero * 2;
// }
// console.log(dobroNumero(50));
//=======================================================
//     ex009
// // Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function mediaTresNumeros(num1,num2,num3) {
//     return (num1 + num2 + num3) / 3;
// }
// console.log(mediaTresNumeros(num1=3,num2=5,num3=8));
//=======================================================
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
//=======================================================
//     ex011
// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
// function numeroAoQuadrado(numero) {
//     return numero * numero;
// }
// console.log(numeroAoQuadrado(5));
//=======================================================
//    ex012
// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// function calcularIMC(altura, peso) {
//     let imc = peso / (altura * altura);
//     if(imc < 18.5) {
//         alert('Baixo peso');
//     }
//     else if(imc > 18.5 && imc < 25) {
//         alert('Peso normal');
//     }
//     else if(imc > 25 && imc < 30) {
//         alert('Sobrepeso');
//     }
//     else if(imc > 30 && imc < 35) {
//         alert('Obesidade grau I');
//     }
//     else if(imc > 35 && imc < 40) {
//         alert('Obesidade grau II');
//     } else {
//         alert('Obesidade grau III (mórbida');
//     }
// }
// let altura = prompt('Digite sua altura em metros: ');
// let peso = prompt('Digite seu peso em kg: ');
// calcularIMC(altura, peso);
//=======================================================
//     ex013
// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// function numeroFatorial(num) {
//     if (num == 0 || num == 1) {
//         return 1;
//     }
//     return num * numeroFatorial(num - 1);
// }
// let fatorial = parseInt(prompt('Digite um número para calcular seu fatorial: '));
// alert(numeroFatorial(fatorial));
//=======================================================
//     ex014
// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
// function converterDolar(real, cotacaoDolar=4.0) {
//     return real / cotacaoDolar;
// }
// let reais = parseFloat(prompt('Digite um valor em reais para conversão em dólar: '));
// alert(`R$${reais} considerando a cotação de U$4,00 é de U$${converterDolar(reais)}`);
//=======================================================
//     ex015
// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
// function calculoAreaPerimetroRetangular(altura, largura) {
//     let area = largura * altura;
//     let perimetro = 2 * (largura + altura);
//     alert(`A área é ${area} e o perímetro é ${perimetro}`);
// }
// let altura = parseFloat(prompt('Digite a altura: '));
// let largura = parseFloat(prompt('Digite a largura: '));
// calculoAreaPerimetroRetangular(altura, largura);
//     ex016
//=========================================================
// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
// function calculoAreaPerimetroCircular(raio, pi=3.14) {
//     let area = pi * raio * raio;
//     let perimetro = 2 * pi * raio;
//     alert(`A área é ${area.toFixed(2)} e o perímetro é ${perimetro.toFixed(2)}`);
// }

// let raio = parseFloat(prompt('Digite o raio da sala: '));
// calculoAreaPerimetroCircular(raio);
//========================================================
//     ex017
// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
// function calcularTabuada(num) {
//     for(let i=1; i < 11; i++) {
//         alert(`${num} x ${i} = ${num * i}`);
//     }
// }
// numero = parseInt(prompt('Digite um número para tabuada: '));
// calcularTabuada(numero);
//=========================================================
//     ex018
// Crie uma lista vazia, com o nome listaGenerica.
// let listaGenerica = [];
//=========================================================
//     ex019
// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
// let linguagensDeProgramacao = ['Javascript', 'C','C++','Python'];
//=========================================================
//     ex020
// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
// linguagensDeProgramacao.push('Java', 'Ruby','GoLang');
// console.log(linguagensDeProgramacao);
//=========================================================
//     ex021
// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
// let listaNomes = ['Diego', 'Jonathan', 'Gabriel'];
// console.log(listaNomes[0]);
//=========================================================
//     ex022
// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
// let listaNomes = ['Diego', 'Jonathan', 'Gabriel'];
// console.log(listaNomes[1]);
//=========================================================
//     ex023
// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
// let listaNomes = ['Diego', 'Jonathan', 'Gabriel'];
// console.log(listaNomes[listaNomes.length -1]);