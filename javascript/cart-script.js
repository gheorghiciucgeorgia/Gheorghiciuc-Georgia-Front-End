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

    console.log("my cartCost is",cartCost);
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
            <span>${item.inCart}</span>
          </div>

          <div class="total">
              $${item.inCart*item.price}
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