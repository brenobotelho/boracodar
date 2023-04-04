"use strict"

let openModalBtn = document.querySelector("#open-modal-btn");
let modal = document.querySelector("#modal");
let closeModalBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", () => {
	modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
	modal.style.display = "none";
});

window.addEventListener("click", (event) => {
	if (event.target == modal) {
	modal.style.display = "none";
	}
});


let numeroInput = document.querySelector("#numero");
let nomeInput = document.querySelector("#nome");
let validadeInput = document.querySelector("#validade");
let cardNumero = document.querySelector(".middle");
let buttonAdd = document.querySelector(".add-cartao");

buttonAdd.addEventListener("click", function(){
	verificar();
});

numeroInput.addEventListener('input', (e) => {

		formatarNumero();

		let inputValue = e.target.value
		const firstDigit = inputValue.charAt(0)

		if(inputValue == '') {
			cardNumero.innerHTML = '1234 1234 12** ****'
		} else {
			cardNumero.innerHTML = inputValue.replace(/(.{4})/g, '$1 ')
		}
	
});


nomeInput.addEventListener("input", () => {

	let cardNome = document.querySelector(".bottom span");

	if (nomeInput.value.length === 0) {
		cardNome.innerText = "Nome como está no cartão"
	}else{
		cardNome.innerText = nomeInput.value;
		formatarNome();
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

function formatarNome(){
	nomeInput.addEventListener('keydown', (e) => {
	let onlyLetters = /^[a-zA-Z\s]+$/

		if (!onlyLetters.test(e.key)) {
		e.preventDefault();
		}
	});

};


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

}

function salvarDados() {
  
	let nome = document.querySelector("#nome").value;
	let numero = document.querySelector("#numero").value;
	let validade = document.querySelector("#validade").value;
  
	var dados = {
		"nome": nome,
		"numero": numero,
		"validade": validade
	};
  
	var dadosJSON = JSON.stringify(dados);
  
	localStorage.setItem("dados-" + Date.now(), dadosJSON);
  
	document.querySelector("#nome").value = "";
	document.querySelector("#numero").value = "";
	document.querySelector("#validade").value = "";
  
	
	atualizarListaDadosSalvos();
	
}

function atualizarListaDadosSalvos() {

	let count = "";
	let cards = document.querySelector(".card-container");
  
	cards.innerHTML = '';	
  
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
	window.onload = function() {
	atualizarListaDadosSalvos();
	
}

document.querySelector(".btn-clear").addEventListener("click", function(){
	localStorage.clear();
	alert("Todos os dados salvos foram limpos!");
	window.location.reload(true);
})


function verificar(){

		if(numeroInput.value.length < 12 || nomeInput.value == '') {
			alert("Credenciais erradas! Verifique os campos novamente.")
		}else {
			salvarDados();
			alert("Cartão adicionado com sucesso!")
		} 

}










