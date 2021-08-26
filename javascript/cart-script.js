// wish increasing number when clicked

let wish=document.querySelectorAll(".add-wish");

for(let i=0;i< wish.length;i++){
  wish[i].addEventListener('click',()=>{
    wishNumbers();
  });
}
//this function is to set the wish numbers when we load the page to never change
function onLoadWishNumbers(){
  let heartNumbers=localStorage.getItem('wishNumbers');
  
  if(heartNumbers){
    document.querySelector('.heart span').textContent=heartNumbers;
  }
}

function wishNumbers(){
  
  let heartNumbers=localStorage.getItem('wishNumbers');
  
  heartNumbers=parseInt(heartNumbers);

  if(heartNumbers){

    localStorage.setItem('wishNumbers',heartNumbers + 1);
    document.querySelector('.heart span').textContent=heartNumbers + 1;
   
  
  }else{
    localStorage.setItem('wishNumbers',1);
    document.querySelector('.heart span').textContent=1;
  }
}
onLoadWishNumbers();

//--------------cart script------
let carts=document.querySelectorAll('.add-cart');
let products=[
  {
     name:"Kristina Dam Oak Table With White Marble Top",
     tag:"prd1",
     price:799.55,
     inCart:0
  },
  {
    name:"Hay - About A Lounge Chair AAL 93",
    tag:"prd2",
    price:659.55,
    inCart:0
 },
  {
     name:"Activate Facial Mask and Charcoal Sopa",
     tag:"prd3",
     price:129.55,
     inCart:0
  },
  {
     name:"Cocktail Table Walnut | YES",
     tag:"prd4",
     price:299.99,
     inCart:0
  },
  {
     name:"Hay - About A Lounge Chair AAL 93",
     tag:"prd5",
     price:659.55,
     inCart:0
  },
  {
     name:"TORY DESK CALENDAR",
     tag:"prd6",
     price:410.99,
     inCart:0
  },
  {
     name:"CH445 Wing Chair on  SUITE NY",
     tag:"prd7",
     price:330.55,
     inCart:0
  },
  {
    name:"Kristina Dam Oak Table With White Marble Top",
    tag:"prd1",
    price:799.55,
    inCart:0
 },
 {
   name:"Hay - About A Lounge Chair AAL 93",
   tag:"prd2",
   price:659.55,
   inCart:0
},
 {
    name:"Activate Facial Mask and Charcoal Sopa",
    tag:"prd3",
    price:129.55,
    inCart:0
 },
 {
    name:"Cocktail Table Walnut | YES",
    tag:"prd4",
    price:299.99,
    inCart:0
 }

];
for(let i=0; i< carts.length; i++) {
  carts[i].addEventListener('click', () => {
      cartNumbers(products[i]);
      totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if( productNumbers ) {
      document.querySelector('.cart span').textContent = productNumbers;
      console.log(productNumbers);
  }
}

function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if( action ) {
      localStorage.setItem("cartNumbers", productNumbers - 1);
      document.querySelector('.cart span').textContent = productNumbers - 1;
      console.log("action running");
  } else if( productNumbers ) {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
      localStorage.setItem("cartNumbers", 1);
      document.querySelector('.cart span').textContent = 1;
  }
  setItems(product);
}


function setItems(product) {

  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null) {
      let currentProduct = product.tag;
  
      if( cartItems[currentProduct] == undefined ) {
          cartItems = {
              ...cartItems,
              [currentProduct]: product
          }
      } 
      cartItems[currentProduct].inCart += 1;

  } else {
      product.inCart = 1;
      cartItems = { 
          [product.tag]: product
      };
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost( product, action ) {
  let cart = localStorage.getItem("totalCost");
  

  if( action) {
      cart = parseFloat(cart);

      localStorage.setItem("totalCost", cart - product.price);
  } else if(cart != null) {
      
      cart = parseFloat(cart);
      localStorage.setItem("totalCost", cart + product.price);
  
  } else {
      localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  let cart = localStorage.getItem("totalCost");
  cart = parseFloat(cart).toFixed(2);

  let productContainer = document.querySelector('.products');

  let totalContainer=document.querySelector('.cartsubtotal');
  
  
  let totalOrderContainer=document.querySelector('.order-total');
  
  let total=localStorage.getItem('totalOrder');
  
  if( cartItems && productContainer ) {
    productContainer.innerHTML = '';
    totalContainer.innerHTML='';
    totalOrderContainer.innerHTML='';
    Object.values(cartItems).map( (item, index) => {
        productContainer.innerHTML += `
        <div class="product-row">

          <div class="product">
            <img src="img/${item.tag}.png">
            <div class="product-name">
              <span class="product-tag">${item.tag}</span>
              <span>${item.name}</span>
              <span class="price">$${item.price}</span>
            </div>
          </div>
            
          <div class="quantity">
            <button class="decrease">-</button>
            <span>${item.inCart}</span>
            <button class="increase">+</button>
            </div>

          <div class="total">
              $${(item.inCart*item.price).toFixed(2)}
          </div>

          <div class="close-btn">
          <i class="fas fa-times"></i>
          </div>

          </div>
        `;
      });
      totalContainer.innerHTML+=`
          <div class="left">
            <p class="basketTotalTitle">cart subtotal:  </p>
          </div>
          <div class="right">
            <p>$${cart}</p>
          </div>
        
      `;
      totalOrderContainer.innerHTML+=`
        <div class="left">
          <p class=title-order>Order Total:</p>
        </div>
        <div class="right">
          <p>$${total}</p>
        </div>
      `
      deleteButtons();
      manageQuantity();
  }
}
function manageQuantity() {
  let decreaseButtons = document.querySelectorAll('.decrease');
  let increaseButtons = document.querySelectorAll('.increase');
  let currentQuantity = 0;
  let currentProduct = '';
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  for(let i=0; i < increaseButtons.length; i++) {

      decreaseButtons[i].addEventListener('click', () => {
          
        console.log(cartItems);
          currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
          console.log(currentQuantity);
          currentProduct = decreaseButtons[i].parentElement.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
          console.log(currentProduct);
          console.log(cartItems[currentProduct].inCart);  

          if( cartItems[currentProduct].inCart > 1 ) {
            cartItems[currentProduct].inCart -= 1;
            cartNumbers(cartItems[currentProduct], "decrease");
            totalCost(cartItems[currentProduct], "decrease");
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        }
      });
        increaseButtons[i].addEventListener('click', () => {
          console.log(cartItems);
          currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
          console.log(currentQuantity);
          currentProduct = decreaseButtons[i].parentElement.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
          console.log(currentProduct);

          cartItems[currentProduct].inCart += 1;
          cartNumbers(cartItems[currentProduct]);
          totalCost(cartItems[currentProduct]);
          localStorage.setItem('productsInCart', JSON.stringify(cartItems));
          displayCart();
      });
      
      
    }
}
function deleteButtons() {

  let deleteButtons = document.querySelectorAll('.close-btn i');
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productName;
  

  for(let i=0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () => {

      productName = deleteButtons[i].parentElement.previousElementSibling.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
      
      localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
      localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

        delete cartItems[productName];
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));

        displayCart();
        onLoadCartNumbers();
    });
  }
}
onLoadCartNumbers();
displayCart();

let radiobutton=document.getElementsByName('fav_language');


for(var i=0;i<radiobutton.length;i++){
  let input=radiobutton[i];
  input.addEventListener('click',shipping);
}

//did the shipping methods
function shipping(){

  let cart=localStorage.getItem('totalCost');
  cart = parseFloat(cart);

  console.log(cart);
  var shippingvalue=document.getElementsByClassName('price-shipping');

  let ordertotal=cart;

  for(let i=0;i<shippingvalue.length;i++){

    if(shippingvalue[i].checked){

      var itis=parseFloat(shippingvalue[i].value);
      
      console.log(itis);

      ordertotal=(ordertotal+itis).toFixed(2);

      localStorage.setItem('totalOrder',ordertotal);
      displayCart();
      }
  }
}
//PDP Page quantity
const amount = document.querySelector(".quantity-PDP");

function quantityPDP(){

  //added the values of the buttons in some constants
	const minus = document.querySelector(".decrease-PDP");
	const plus = document.querySelector(".increase-PDP");

	// Initial value of the input
	amount.value = 1;

	// Interaction and amount validate
	minus.addEventListener("click", () => {

		amount.focus();
		amount.value <= 1 ? amount.value = 1 : amount.value--;
    
    //we save the quantity into a localstorage it will help us with the adding to cart
    localStorage.setItem('quantityPDP',amount.value);
	}, true);

	plus.addEventListener("click", () => {

		amount.focus();

		amount.value >= 99 ? amount.value = 9 : amount.value++;

    //the same as above
    localStorage.setItem('quantityPDP',amount.value);
	}, true);
}
quantityPDP();
    //now we will add the function for adding to cart on the PDP page
let cartPDP=document.querySelectorAll('.add-to-cart');

for(let i=0;i<cartPDP.length;i++){
  cartPDP[i].addEventListener('click',()=>{
    quantityNumber();
  });
}
function onLoadCartPDPNumbers(){
  let quantitynr=localStorage.getItem('cartNumbers');

  if(quantitynr){
    document.querySelector('.cart span').textContent=quantitynr;
  }
}
function quantityNumber(){

  let quantNumber=localStorage.getItem('quantityPDP');
  quantNumber=parseInt(quantNumber);
  let cartnr=localStorage.getItem('cartNumbers');
  cartnr=parseInt(cartnr);
  
  if(quantNumber){
    localStorage.setItem('cartNumbers', cartnr + quantNumber);
    document.querySelector('.cart span').textContent=cartnr;
  }else{
    localStorage.setItem('cartNumbers',cartnr);
    document.querySelector('.cart span').textContent=cartnr;
  }
}
onLoadCartPDPNumbers();




