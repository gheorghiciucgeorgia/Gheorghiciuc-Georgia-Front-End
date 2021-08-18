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
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);


