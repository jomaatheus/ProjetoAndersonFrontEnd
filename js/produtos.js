export const produtosTenis = [
  { nome: "tenis nike 1", imagem: "images/pngegg.png", preco: "90R$" },
  { nome: "tenis adidads 2", imagem: "images/tenis2.png", preco: "80R$" },
  { nome: "tenis airfoce 6", imagem: "images/tenis3.png", preco: "92R$" },
  { nome: "tenis cavaleira", imagem: "images/tenis4.png", preco: "62R$" },
  { nome: "tenis tarara", imagem: "images/tenis5.png", preco: "52R$" },
  { nome: "tenis air notion", imagem: "images/tenis6.png", preco: "42R$" },
  { nome: "tenis airdrop", imagem: "images/tenis7.png", preco: "10R$" },
  { nome: "tenis azul", imagem: "images/tenis8.png", preco: "105R$" },
  { nome: "tenis pulma", imagem: "images/tenis9.png", preco: "200R$" },
  { nome: "tenis polo", imagem: "images/tenis10.png", preco: "202R$" },
  { nome: "tenis polo 2", imagem: "images/tenis11.png", preco: "302R$" },
  { nome: "tenis adidas", imagem: "images/tenis12.png", preco: "22R$" },
];

export const produtosChinelo = [
  { nome: "chinelo 1", imagem: "images/chinelo1.png", preco: "30R$" },
  { nome: "chinelo 2", imagem: "images/chinelo2.png", preco: "20R$" },
  { nome: "chinelo 3", imagem: "images/chinelo3.png", preco: "20R$" },
  { nome: "chinelo 4", imagem: "images/chinelo4.png", preco: "30R$" },
  { nome: "chinelo 5", imagem: "images/chinelo5.png", preco: "92R$" },
  { nome: "chinelo 6", imagem: "images/chinelo6.png", preco: "100R$" },
];

export function filtrarProdutos(query, produtos) {
  return produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(query.toLowerCase())
  );
}

export function exibirProdutos(containerCards, produtosFiltrados) {
  containerCards.innerHTML = "";
  produtosFiltrados.forEach((produto) => {
    const card = document.createElement("div");
    card.classList.add("cards");

    card.innerHTML = `
            <div class="imagem">
                <img src="${produto.imagem}" alt="${produto.nome}" />
            </div>
            <div class="imagem-descricao">
                <h1>${produto.nome}</h1>
                <div class="preco-e-botao">
                    <a href="#" class="btn-comprar">comprar</a>
                    <h3><span class="preco">${produto.preco}</span></h3>
                </div>
            </div>
        `;

    containerCards.appendChild(card);
  });
}
