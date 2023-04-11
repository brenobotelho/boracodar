let input = document.querySelector('#file-upload');
let list = document.querySelector('#file-list');
let fileIcon = document.querySelector('.file-icon');
let description = document.createElement('p');
let close = document.querySelector(".close");


input.addEventListener('change', () => {
  
	let files = input.files;
	let file = input.files[0];
	let fileSize = file.size;
	let fileType = file.type;
	let fileName = file.name;

	let reader = new FileReader();
	let chunkSize = 1024 * 1024; // 1 MB
	let loaded = 0;

	for (let i = 0; i < files.length; i++) {

	let file = files[i];

	let listItem = document.createElement('li');
	listItem.classList.add('file-item');
	
    	

	listItem.innerHTML = `<div class="file-icon"> 
						<i class='bx bxs-file-blank'></i> 
					</div>

					<div class="file-name"> 
						<div class="top"> <h2> ${file.name} </h2> <span class="close"> X </span> </div>
						<h3> ${file.size}MB </h3>
						<div class="progress-bar-container">
    							<div class="progress-bar"></div>
							<div class="progress-bar-fill"></div>
							<div class="progress-bar-text"></div>	
  						</div>
						
					</div>`

	list.appendChild(listItem);

	
	

	reader.addEventListener('load', (event) => {
		loaded += event.loaded;
		let percentComplete = ((loaded / fileSize) * 100).toFixed(2);
	});

	reader.addEventListener('error', () => {
		console.error('Ocorreu um erro ao carregar o arquivo.');
	});

	reader.addEventListener('abort', () => {
		console.warn('O carregamento do arquivo foi cancelado pelo usuário.');
	});

	reader.addEventListener('loadend', () => {
		console.log('Carregamento concluido.');
		
	});
	
	reader.readAsArrayBuffer(file);
		
	}

});

close.addEventListener('click', removeBox);

	
function removeBox(event) {
	if(event.target.classList.contains('close')) {
		let box = event.target.closest('.file-item')
		setTimeout(() => {
		list.removeChild(box);
		}, 100)
	}
}

	