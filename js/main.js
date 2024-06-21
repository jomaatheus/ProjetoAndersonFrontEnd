import { filtrarProdutos, exibirProdutos } from "./produtos.js";
import { menuShow } from "./menu.js";

document.addEventListener("DOMContentLoaded", function () {
  const inputPesquisarHeader = document.getElementById("pesquisar");
  const containerCardsTenis = document.querySelectorAll(".container-cards")[0];
  const containerCardsChinelo =
    document.querySelectorAll(".container-cards")[1];

  const produtosTenis = [
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

  const produtosChinelo = [
    { nome: "chinelo 1", imagem: "images/chinelo1.png", preco: "30R$" },
    { nome: "chinelo 2", imagem: "images/chinelo2.png", preco: "20R$" },
    { nome: "chinelo 3", imagem: "images/chinelo3.png", preco: "20R$" },
    { nome: "chinelo 4", imagem: "images/chinelo4.png", preco: "30R$" },
    { nome: "chinelo 5", imagem: "images/chinelo5.png", preco: "92R$" },
    { nome: "chinelo 6", imagem: "images/chinelo6.png", preco: "100R$" },
  ];

  inputPesquisarHeader.addEventListener("input", function () {
    const query = inputPesquisarHeader.value;

    const produtosFiltradosTenis = filtrarProdutos(query, produtosTenis);
    const produtosFiltradosChinelo = filtrarProdutos(query, produtosChinelo);

    exibirProdutos(containerCardsTenis, produtosFiltradosTenis);
    exibirProdutos(containerCardsChinelo, produtosFiltradosChinelo);
  });

  exibirProdutos(containerCardsTenis, produtosTenis);
  exibirProdutos(containerCardsChinelo, produtosChinelo);
});
