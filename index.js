var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function addToCart(item) {
  let max = 100
 var object = {itemName: `${item}`, itemPrice: getRandomInt(max)}
  cart.unshift(object)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0){
    return `Your shopping cart is empty.`
} else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`

} else if(cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
} else{
  let cartString = ``
  for(let i = 0; i < cart.length - 1; i++){
  cartString = cartString + (`${cart[i].itemName} at $${cart[i].itemPrice}, `)
}
  const first = `In your cart, you have `
  const end = `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  return first + cartString + end
}
}

function total() {
  let total = 0
  for(let i = 0; i < cart.length; i++){
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  let i = 0
  if(item === cart[i].itemName){
    for(let i = 0; i < cart.length; i++){
    cart.splice(i,1)
}   return cart
}
else{
     return `That item is not in your cart.`
}
   return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
