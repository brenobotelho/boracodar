let inputPesquisa = document.querySelector("#nomes");
let listaNomes = document.querySelector(".content");

inputPesquisa.addEventListener('keyup', () => {
	let termoPesquisa = inputPesquisa.value.trim().toLowerCase();

	if (termoPesquisa) {

	let elementosLista = listaNomes.getElementsByTagName('li');
		for (let i = 0; i < elementosLista.length; i++) {
			let elemento = elementosLista[i];
			let conteudoElemento = elemento.innerText.toLowerCase();
				if (conteudoElemento.includes(termoPesquisa)) {
						elemento.style.display = 'flex';
					} else {
						elemento.style.display = 'none';
					}
				}
			} else {
				let elementosLista = listaNomes.getElementsByTagName('li');
				for (let i = 0; i < elementosLista.length; i++) {
					let elemento = elementosLista[i];
					elemento.style.display = 'flex';
				}
			}
});