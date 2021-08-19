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
    name:"Ruffle Front V-Neck Cardigan",
    tag:"pd1",
    price:299.99,
    inCart:0
  }
];
for(let i=0;i<carts.length;i++){

    carts[i].addEventListener('click',() => {
      cartNumbers(products[i]);
      totalCost(products[i]);
      
    })
}
function onLoadCartNumbers(){
  let productNumbers=localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.cart span').textContent=productNumbers;
  }
}
function cartNumbers(product){
  let productNumbers=localStorage.getItem('cartNumbers');

  productNumbers=parseInt(productNumbers);
  
  if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers + 1);
    document.querySelector('.cart span').textContent=productNumbers + 1;
  }
  else{
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart span').textContent=1;
  }
  setItems(product);
}
function setItems(product) {
  let cartItems=localStorage.getItem('productsInCart');
  cartItems=JSON.parse(cartItems);
 
  if(cartItems!=null){

    if(cartItems[product.tag]==undefined){
      cartItems={
        ...cartItems,
        [product.tag]:product
      }
    }
    cartItems[product.tag].inCart += 1;
  }
  else{
        product.inCart =1;
        cartItems={
        [product.tag]:product
        }
      }

  localStorage.setItem("productsInCart",JSON.stringify(cartItems));  // body...
}
function totalCost(product){

    let cartCost=localStorage.getItem('totalCost');

    console.log('my cartCost is',cartCost);
    console.log(typeof cartCost);

    if(cartCost!=null){
        cartCost=parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost+product.price);
    }
    else{
      localStorage.setItem("totalCost",product.price);
    }
}
function displayCart(){

  let cartItems=localStorage.getItem("productsInCart");
  cartItems=JSON.parse(cartItems);
  let productContainer=document.querySelector(".products");
  let cartCost=localStorage.getItem('totalCost');

  console.log(cartItems);
  if(cartItems && productContainer){
      productContainer.innerHTML='';
      Object.values(cartItems).map(item=>{
        productContainer.innerHTML +=`
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
          <h4 class="basketTotal">$${cartCost} </h4>
        </div>
      `;
  }
}
onLoadCartNumbers();
displayCart();

//removing button
var removebtn=document.getElementsByClassName('close-btn');

for(var i=0;i<removebtn.length;i++)
{
  var button=removebtn[i]
  button.addEventListener('click',function(event){
    var buttonclicked=event.target;
    buttonclicked.parentElement.parentElement.remove();
    updateCartTotal();
  })
}

//quantity updating the total item price
var quantityInput=document.getElementsByClassName('quantity-input');

var IncreaseQuantity=document.getElementsByClassName("add");
console.log(IncreaseQuantity);

for(var i=0;i<quantityInput.length;i++){
  var input=quantityInput[i];
  input.addEventListener( 'change',quantityChanged);

  for(var i=0;i<IncreaseQuantity.length;i++){
    var output=IncreaseQuantity[i];
    output.addEventListener('click', increase);
  };
}
function increase(event){
  var output=event.target;
  for(var i=0;i<quantityInput.length;i++){
  var input=quantityInput[i];
  console.log(input);
  }
  
}
function quantityChanged(event){
  var input=event.target; 
  if(isNaN(input.value) || input.value <= 0){
    input.value=1;
  }
  updateCartTotal();
  //here we will do another function for updating the product price
}

//updating the cart total
function updateCartTotal(){
  
  var cartitemContainer=document.getElementsByClassName('products')[0];
  var cartRows=cartitemContainer.getElementsByClassName('product-row');
  var totalCart=0;


  for(var i=0;i<cartRows.length;i++){
    var cartRow=cartRows[i];
    var priceElement=cartRow.getElementsByClassName('price')[0];
    var quantityElement=cartRow.getElementsByClassName('quantity-input')[0];
    var priceproduct=parseFloat(priceElement.innerText.replace('$',''));
    var quantityproduct=quantityElement.value;

    totalCart=totalCart+(priceproduct * quantityproduct); 
  }
  totalCart=Math.round(totalCart *100)/100;
  document.getElementsByClassName('basketTotal')[0].innerText='$'+ totalCart;
  
}
