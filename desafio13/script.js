// Encontra o botão de abrir o modal
const openModalBtn = document.querySelector("#open-modal-btn");

// Encontra o modal
const modal = document.querySelector("#modal");

// Encontra o botão de fechar o modal
const closeModalBtn = document.querySelector(".close");

// Quando o botão de abrir o modal é clicado, mostra o modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Quando o botão de fechar o modal é clicado, esconde o modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Quando o usuário clica fora do modal, esconde o modal
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});