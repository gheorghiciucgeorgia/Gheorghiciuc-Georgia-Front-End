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
  cart = parseFloat(cart);

  let productContainer = document.querySelector('.products');
  
  if( cartItems && productContainer ) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map( (item, index) => {
        productContainer.innerHTML += `
        <div class="product-row">

          <div class="product">
            <img src="img/${item.tag}.png">
            <div class="product-name">
              <span>${item.name}</span>
              <span class="price">$${item.price}</span>
            </div>
          </div>
            
          <div class="quantity">
            <button type="button" id="sub" class="sub">-</button>
            <input class="quantity-input" type="number" id="1" value="${item.inCart}" min="1" max="100"/>
            <button type="button" id="add" class="add">+</button>
            </div>

          <div class="total">
              $${item.inCart*item.price}
          </div>
          <div class="close-btn">
          <i class="fas fa-times"></i>
          </div>

          </div>
        `;
      });
      productContainer.innerHTML+=`
        <div class="basketTotalContainer">
          <h4 class="basketTotalTitle">Basket Total </h4>
          <h4 class="basketTotal">$${cart} </h4>
        </div>
      `;
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
          currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
          console.log(currentProduct);
      });
    }
}
onLoadCartNumbers();
displayCart();

