// Get the modal
var modal = document.getElementById('id01');
var usericon=document.getElementById('user-icon');
var closeicon=document.getElementById('close-icon');

//I had to do again for mobile because the id is unique and if i made for class it doesn't work
var usericonmobile=document.getElementById('user-icon-for-mobile');

//when you click on the user icon the modal it shows
usericon.onclick = function(){
    modal.style.display="block";
};
//click event for user icon mobile
usericonmobile.onclick = function(){
    modal.style.display="block";
};
//when the user clicks on the x it closes the modal
closeicon.onclick=function(){
    modal.style.display="none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//the toogle password icon
//when you click on the eye to show you the password
const tooglePassword=document.querySelector('#togglePassword');
const password=document.querySelector('#password');
//we took the elements in some variables

//we must attach an event listener to the togglePassword icon and toggle the type attribut of the password field
tooglePassword.addEventListener('click',function(e){
    //toggle the type attribute
    const type=password.getAttribute('type')=='password' ? 'text' : 'password';

    password.setAttribute('type', type);
});

//making the carousel banner work
var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//--------------------Load More button-----------//
$(function () {
    $(".box-hidden").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".box-hidden:hidden").slice(0, 1).slideDown('fast','linear');
        if ($(".box-hidden:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});
//------------Cookie---------------
const cookieContainer = document.querySelector(".cookie-back");
const cookieButton = document.querySelector(".cookie-btn");
var closecookie=document.getElementById("close-icon-cookie");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 10000);
closecookie.onclick=function(){
    cookieContainer.classList.remove("active");
}

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
     name:"CH445 Wing Chair on <br> SUITE NY",
     tag:"prd7",
     price:330.55,
     inCart:0
  }
];
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
            <div class="product">
              <span class="closing">X</span> 
              <img src="img/${item.tag}.png">
              <span class="item-name">${item.name}</span>
            </div>
            <div class="price">$${item.price}</div>
            <div class="quantity">
              <div id="field1">
                <button type="button" id="sub" class="sub">-</button>
                <input type="number"value="${item.inCart}"/>
                <button type="button" id="add" class="add">+</button>
              </div>
            </div>
            <div class="total">
                $${item.inCart*item.price}
            </div>
          `;
        });
        productContainer.innerHTML+=`
          <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">CART SUBTOTAL</h4>
            <h4 class="basketTotal">$${cartCost}</h4>
          </div>
        `;
    }
  }
  var removeCartItems=document.getElementsByClassName('.closing')
  console.log(removeCartItems);
  for(var i=0;i<removeCartItems.length;i++){
    var button=removeCartItems[i];
    button.addEventListener('click',function(event){
      var buttonclicked=event.target;
      buttonclicked.parentElement.parentElement.remove()
  
    });
  };
  onLoadCartNumbers();
  displayCart();

