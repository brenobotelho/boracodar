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
let validadeInput = document.querySelector("#validade");
let cardNumero = document.querySelector(".middle");

numeroInput.addEventListener("input", () => {
	formatarNumero();
});

nomeInput.addEventListener("input", () => {

	let cardNome = document.querySelector(".bottom span");

	if (nomeInput.value.length === 0) {
		cardNome.innerText = "Nome como está no cartão"
	}else{
		cardNome.innerText = nomeInput.value;
	}
});


validadeInput.addEventListener("input", () => {

	let cardVal = document.querySelector(".cc-val");

	if (validadeInput.value.length === 0) {
		cardVal.innerText = "AA/MM"
	}else{
		cardVal.innerText = validadeInput.value;
	}
});


function formatarNumero() {
	numeroInput.addEventListener('keydown', function(e) {
		if (!/^\d+$/.test(e.key) 
		&& e.key !== 'Backspace' 
		&& e.key !== 'Delete' 
		&& e.key !== 'ArrowLeft' 
		&& e.key !== 'ArrowRight') {
		e.preventDefault();
		}
	});

	numeroInput.addEventListener('input', (e) => {
		let inputValue = e.target.value
		const firstDigit = inputValue.charAt(0)

		if(inputValue == '') {
			cardNumero.innerHTML = '1234 1234 12** ****'
		} else {
			cardNumero.innerHTML = inputValue.replace(/(.{4})/g, '$1 ')
		}
	});
}


/*function formatarNumero() {
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
}*/




function ApenasLetras(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if (
            (charCode > 64 && charCode < 91) || 
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255) // letras com acentos
        ){
            return true;
        } else {
            return false;
        }
    } catch (err) {
        alert(err.Description);
    }
}


// Função para salvar dados no localStorage
function salvarDados() {
  // Pega os dados do formulário
  let nome = document.querySelector("#nome").value;
  let numero = document.querySelector("#numero").value;
  let validade = document.querySelector("#validade").value;
  
  // Cria um objeto com os dados do formulário
  var dados = {
    "nome": nome,
    "numero": numero,
    "validade": validade
  };
  
  // Converte o objeto em uma string JSON
  var dadosJSON = JSON.stringify(dados);
  
  // Salva os dados no localStorage com uma chave única
  localStorage.setItem("dados-" + Date.now(), dadosJSON);
  
  // Limpa os campos do formulário
  document.querySelector("#nome").value = "";
  document.querySelector("#numero").value = "";
  document.querySelector("#validade").value = "";
  
  // Atualiza a lista de dados salvos
  atualizarListaDadosSalvos();
}

// Função para atualizar a lista de dados salvos
function atualizarListaDadosSalvos() {

  // Pega a lista onde os dados serão mostrados

  let count = "";
  let cards = document.querySelector(".card-container");
  
  // Limpa a lista
  cards.innerHTML = '';	
  
  // Itera sobre as chaves do localStorage e mostra os dados
  for (var i = 0; i < localStorage.length; i++) {
    var chave = localStorage.key(i);
    if (chave.indexOf("dados-") === 0) {
      var dadosJSON = localStorage.getItem(chave);
      var dados = JSON.parse(dadosJSON);

	
	let card = document.createElement('div');
  	card.classList.add('card');

  	count++;

	let top = document.createElement('div');
  	top.classList.add('top');

	let cartao = document.createElement('div');
  	cartao.classList.add('cartao');
	cartao.innerHTML = `<div class="top"> 
				<img src="./images/visa.svg"> 
				<img src="./images/aprox.svg" />
			    </div> 
				<div class="middle"> ${dados.numero} </div>
				<div class="bottom"> <span> ${dados.nome} </span> <div class="cc-val"> ${dados.validade} </div> 
			    </div>`;
	

	let h2 = document.createElement("h2");
	h2.textContent = `Cartão ${count}`;

	let p1 = document.createElement("p");
	p1.textContent = `Este é o meu cartão ${count}`;

	card.appendChild(top);
	card.appendChild(cartao);
	card.appendChild(h2);
	card.appendChild(p1);
	

	cards.appendChild(card);
	
    }
  }
}

// Atualiza a lista de dados salvos quando a página é carregada
	window.onload = function() {
	atualizarListaDadosSalvos();
	
}

document.querySelector(".btn-clear").addEventListener("click", function(){
	localStorage.clear();
	alert("Todos os dados salvos foram limpos!");
	window.location.reload(true);
})













