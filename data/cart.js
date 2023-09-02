export let cart =JSON.parse(localStorage.getItem('cart'));




function saveToStorage()
{
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(button) {
  let Qty = Number(document.querySelector(`.js-quantity-selector-${button.dataset.productId}`).value)
  let matchingItem;
  cart.forEach((item) => {
    if (item.productId === button.dataset.productId) {
      matchingItem = item
    }
  })
  if (matchingItem) {
    matchingItem.quantity += Qty;
  }
  else {
    cart.push({
      productId: button.dataset.productId,
      quantity: Qty
    })
  }
  saveToStorage();
}


export function updateCartQty() {
  let cartQty = 0;
  cart.forEach((item) => {
    cartQty += item.quantity;
  })
  return cartQty;
  
}

export function removeFromCart(cartItemId) {
  let newArray = []
  cart.forEach((cartItem) => {
    if (cartItem.productId !== cartItemId) {
      newArray.push(cartItem);
    }
  });

  cart = newArray;
  saveToStorage();

}
