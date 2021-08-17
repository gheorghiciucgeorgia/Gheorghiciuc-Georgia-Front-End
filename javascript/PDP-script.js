var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("demo");
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

// Get the Image modal
var modal01 = document.getElementById("myModal01");
var modalImg = document.getElementById("img01");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img01 = document.getElementsByClassName("myImg01")[0];
var img02 = document.getElementsByClassName("myImg01")[1];
var img03 = document.getElementsByClassName("myImg01")[2];
var img04 = document.getElementsByClassName("myImg01")[3];

var expandbutton01=document.getElementsByClassName("expand-button")[0];
var expandbutton02=document.getElementsByClassName("expand-button")[1];
var expandbutton03=document.getElementsByClassName("expand-button")[2];
var expandbutton04=document.getElementsByClassName("expand-button")[3];

expandbutton01.onclick = function(){
    modal01.style.display = "block";
    modalImg.src = img01.src;
}
expandbutton02.onclick = function(){
    modal01.style.display = "block";
    modalImg.src = img02.src;
}
expandbutton03.onclick = function(){
    modal01.style.display = "block";
    modalImg.src = img03.src;
}
expandbutton04.onclick = function(){
    modal01.style.display = "block";
    modalImg.src = img04.src;
}

// Get the <span> element that closes the modal
var span01 = document.getElementsByClassName("close01")[0];

// When the user clicks on <span> (x), close the modal
span01.onclick = function() {
  modal01.style.display = "none";
}

