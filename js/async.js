// js/async.js
export async function addCarrinhoAsync(element) {
    try {
      // Simula um atraso para a requisição
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      // Obtenha informações do produto
      const produto = element.closest('.imagem-descricao').querySelector('h1').textContent;
      const preco = element.closest('.imagem-descricao').querySelector('.preco').textContent;
  
      // Simula a adição ao carrinho
      console.log(`Produto ${produto} com preço ${preco} adicionado ao carrinho`);
  
      // Atualize a interface do usuário
      const qntddCompra = document.getElementById('qntdd-compra');
      qntddCompra.textContent = parseInt(qntddCompra.textContent) + 1;
  
      alert(`${produto} adicionado ao carrinho com sucesso!`);
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
    }
  }
  
  // Adiciona o evento aos botões de comprar após o carregamento do DOM
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-comprar').forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        addCarrinhoAsync(this);
      });
    });
  });
  