// Get the modal
var modal = document.getElementById('id01');
var usericon=document.getElementById('user-icon');
var closeicon=document.getElementById('close-icon');



//when you click on the user icon the modal it shows
usericon.onclick = function(){
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
var dot1=document.getElementsByClassName('dot')[0];
var dot2=document.getElementsByClassName('dot')[1];
var dot3=document.getElementsByClassName('dot')[2];


dot1.onclick=function(){
  currentSlide(1);
}
dot2.onclick=function(){
  currentSlide(2);
}
dot3.onclick=function(){
  currentSlide(3);
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
  cookieContainer.classList.remove("active-cookie");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active-cookie");
  }
}, 10000);
closecookie.onclick=function(){
    cookieContainer.classList.remove("active-cookie");
}

var prev1=document.querySelector('.prev1');
prev1.onclick=function(){
  plusSlides1(-1);
}
var next1=document.querySelector('.next1');
next1.onclick=function(){
  plusSlides1(1);
}
var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
}
var dot01=document.getElementsByClassName('dot1')[0];
var dot02=document.getElementsByClassName('dot1')[1];
var dot03=document.getElementsByClassName('dot1')[2];
var dot04=document.getElementsByClassName('dot1')[3];
var dot05=document.getElementsByClassName('dot1')[4];
var dot06=document.getElementsByClassName('dot1')[5];
var dot07=document.getElementsByClassName('dot1')[6];
var dot08=document.getElementsByClassName('dot1')[7];

dot01.onclick=function(){
  currentSlide1(1);
}
dot02.onclick=function(){
  currentSlide1(2);
}
dot03.onclick=function(){
  currentSlide1(3);
}
dot04.onclick=function(){
  currentSlide1(4);
}
dot05.onclick=function(){
  currentSlide1(5);
}
dot06.onclick=function(){
  currentSlide1(6);
}
dot07.onclick=function(){
  currentSlide1(7);
}
dot08.onclick=function(){
  currentSlide1(8);
}