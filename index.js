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
  cart.push(object)
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
    for(let i = 0; i < cart.length; i++){
    if(item === cart[i].itemName){
    cart.splice(i,1)
    return cart
} }
    return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  if(cardNumber === ' '){
    return `Sorry, we don't have a credit card on file for you.`
  }else {
    let cost = total()
    cart.splice(0,cart.length)
    return `Your total cost is ${cost}, which will be charged to the card ${cardNumber}.`
  }
}
