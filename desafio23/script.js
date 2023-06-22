let contato = document.querySelector(".contato");
let empresa = document.querySelector(".empresa");
let projeto = document.querySelector(".projeto");

let gocompany = document.querySelector(".go-company");
let goproject = document.querySelector(".go-project");
let end = document.querySelector(".go-end");
let back = document.querySelector(".back");

gocompany.addEventListener('click', function(){
	empresa.style.display = 'block';
	contato.style.display = 'none';
})

goproject.addEventListener('click', function(){
	projeto.style.display = 'block';
	empresa.style.display = 'none';
})

back.addEventListener('click', function(){
	if (projeto.style.display === 'block') {
		console.log("projeto")
		projeto.style.display = 'none';
		empresa.style.display = 'block';
	} else if (empresa.style.display === 'block') {
		console.log("empresa")
		empresa.style.display = 'none';
		contato.style.display = 'block';
	}
});


