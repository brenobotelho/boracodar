let leftCard = document.querySelector('.left')
let middleCard = document.querySelector('.middle')
let rightCard = document.querySelector('.right')

leftCard.addEventListener('click', () => {
	let temp = middleCard.innerHTML
	middleCard.innerHTML = leftCard.innerHTML
	leftCard.innerHTML = temp
});

rightCard.addEventListener('click', () => {
	let temp = middleCard.innerHTML
	middleCard.innerHTML = rightCard.innerHTML
	rightCard.innerHTML = temp
})