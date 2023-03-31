"use strict"

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



let numeroInput = document.querySelector("#numero");
let nomeInput = document.querySelector("#nome");

numeroInput.addEventListener("input", () => {
    
    let cardNumero = document.querySelector(".middle");
	
    if (numeroInput.value.length === 0) {
        cardNumero.innerText = "1234 1234 12** ****"
    }

    else {
        cardNumero.innerText = numeroInput.value;
	formatarNumero()
    }
});

nomeInput.addEventListener("input", () => {

	let cardNome = document.querySelector(".bottom span");

	if (nomeInput.value.length === 0) {
		cardNome.innerText = "Nome como está no cartão"
	}else{
		cardNome.innerText = nomeInput.value;
	}
})





let text = "123456789012"; 
let result = text.substring(0, 4);
let resulta = text.substring(4, 8);

//document.getElementById("demo").innerHTML = result;
console.log(result, resulta)


let aa = document.querySelector("#numero");
console.log(aa + "")


function formatarNumero() {
  // Obter o valor digitado no campo de entrada
  const numero = document.querySelector("#numero").value;
  
  // Remover todos os espaços em branco do valor digitado
  const numeroSemEspacos = numero.replace(/\s/g, "");
  
  // Separar o valor em grupos de 4 caracteres usando expressão regular
  const grupos = numeroSemEspacos.match(/.{1,4}/g);
  
  // Adicionar espaçamento a cada grupo de 4 caracteres
  const numeroFormatado = grupos.join(" ");
  
  // Exibir o número formatado na div
  document.querySelector(".middle").textContent = numeroFormatado;
}



/* function formatarNumero() {
  // Obter o valor digitado no campo de entrada
  const numero = document.getElementById("numero").value;
  
  // Obter o mês e o ano a partir do valor digitado
  const mes = numero.slice(0, 2);
  const ano = numero.slice(2);
  
  // Criar um objeto Date com o mês e o ano
  const data = new Date(`${ano}-${mes}-01`);
  
  // Obter o nome do mês e o ano no formato desejado
  const mesAno = data.toLocaleString("pt-BR", { month: "long", year: "numeric" });
  
  // Exibir o número formatado na div
  document.getElementById("numero-formatado").textContent = mesAno;
} */


