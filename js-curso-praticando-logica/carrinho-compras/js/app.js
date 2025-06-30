let valorTotal = 0;
limpar();

function adicionar() {
    // armazenar no produto escolhido, qtde, valor unitário e subtotal
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let qtdeProduto = document.getElementById('quantidade').value;
    let subtotalProduto = valorUnitario * qtdeProduto;

    // adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qtdeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotalProduto}</span>
    </section>`;

    // atualizar o valor total
    valorTotal += subtotalProduto; 
    document.getElementById('valor-total').textContent = `R$${valorTotal}`;
    document.getElementById('quantidade').value = 1;
}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}