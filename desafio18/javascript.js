"use strict"

let leftCard = document.querySelector('.left');
let middleCard = document.querySelector('.middle');
let rightCard = document.querySelector('.right');

leftCard.addEventListener('click', () => {
	let temp = middleCard.innerHTML;
	middleCard.innerHTML = leftCard.innerHTML;
	leftCard.innerHTML = temp;
	middleCard.classList.add('active');
	leftCard.classList.remove('active');
});

rightCard.addEventListener('click', () => {
	let temp = middleCard.innerHTML;
	middleCard.innerHTML = rightCard.innerHTML;
	rightCard.innerHTML = temp;
	middleCard.classList.add('active');
	rightCard.classList.remove('active');
});

middleCard.addEventListener('click', () => {
	middleCard.classList.remove('active');
	leftCard.classList.remove('active');
	rightCard.classList.remove('active');
});