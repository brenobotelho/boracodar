let addBtn = document.querySelectorAll('.add-to-cart-btn');
let cartSection = document.querySelector('.cart');
let totalSpan = document.querySelector('#total');
let total = 0;

let addToCart = (event) => {

  let listItem = event.target.closest('li');
  let itemImage = listItem.querySelector('img').src;
  let itemName = listItem.querySelector('h2').textContent;
  let itemPrice = parseFloat(listItem.querySelector('h3').textContent.replace('R$', '').replace('.', '').replace(',', '.'));

  
  total += itemPrice;
  totalSpan.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  
  cartItem.innerHTML = `
    <img src="${itemImage}" />
    <div class="cart-item-info">
      <h2>${itemName}</h2>
      <div class="bottom">
        <h3>${itemPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
        <div class="btns">
          <button class="add"> + </button>
          <span class="quantity">1</span>
          <button class="remove"> - </button>
        </div>
      </div>
    </div>
  `;

  
  let addButton = cartItem.querySelector('.add');
  addButton.addEventListener('click', () => {
    let quantityElement = cartItem.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    total += itemPrice;
    totalSpan.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  });

  let removeButton = cartItem.querySelector('.remove');
  removeButton.addEventListener('click', () => {
    let quantityElement = cartItem.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
      total -= itemPrice;
      totalSpan.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  });

  
  cartSection.appendChild(cartItem);
};


addBtn.forEach((button) => {
  button.addEventListener('click', addToCart);
});