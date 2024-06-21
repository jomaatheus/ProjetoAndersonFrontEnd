import { filtrarProdutos } from "../js/produtos.js";

describe("Teste da função filtrarProdutos", () => {
  test("Deve retornar produtos filtrados corretamente", () => {
    const query = "nike";
    const produtos = [
      { nome: "tenis nike 1", imagem: "images/pngegg.png", preco: "90R$" },
      { nome: "tenis adidas 2", imagem: "images/tenis2.png", preco: "80R$" },
      { nome: "chinelo nike", imagem: "images/chinelo.png", preco: "50R$" },
    ];

    const resultado = filtrarProdutos(query, produtos);

    expect(resultado).toEqual([
      { nome: "tenis nike 1", imagem: "images/pngegg.png", preco: "90R$" },
      { nome: "chinelo nike", imagem: "images/chinelo.png", preco: "50R$" },
    ]);
  });
  test("Deve retornar um array vazio quando não há correspondências", () => {
    const query = "xyz";
    const produtos = [
      { nome: "tenis nike 1", imagem: "images/pngegg.png", preco: "90R$" },
      { nome: "tenis adidas 2", imagem: "images/tenis2.png", preco: "80R$" },
      { nome: "chinelo nike", imagem: "images/chinelo.png", preco: "50R$" },
    ];
    const resultado = filtrarProdutos(query, produtos);
    expect(resultado).toEqual([]);
  });
});
