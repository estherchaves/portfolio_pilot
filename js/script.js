const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const fecharBtn = document.getElementById("fecharBtn");

// Função para abrir o lightbox
function abrirLightbox(imagem) {
  lightboxImg.src = imagem;  // Definir a imagem no lightbox
  lightbox.style.display = "flex";  // Exibir o lightbox
}

// Evento para fechar o lightbox quando clicar no botão "×"
fecharBtn.addEventListener("click", () => {
  console.log("Fechar clicado");  // Testando
  lightbox.style.display = "none";  // Esconder o lightbox
  lightboxImg.src = "";  // Limpar a imagem
});

// Evento para fechar o lightbox clicando no fundo (não na imagem)
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    console.log("Fundo clicado");  // Testando
    lightbox.style.display = "none";  // Esconder o lightbox
    lightboxImg.src = "";  // Limpar a imagem
  }
});
