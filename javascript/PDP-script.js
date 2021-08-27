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
var smallpic01=document.getElementsByClassName("demo")[0];
var smallpic02=document.getElementsByClassName("demo")[1];
var smallpic03=document.getElementsByClassName("demo")[2];
var smallpic04=document.getElementsByClassName("demo")[3];

smallpic01.onclick = function(){
    currentSlide(1);
}
smallpic02.onclick = function(){
    currentSlide(2);
}
smallpic03.onclick = function(){
    currentSlide(3);
}
smallpic04.onclick = function(){
    currentSlide(4);
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

//the read more script
var readmore=document.getElementById("more");
var readmorebtn=document.getElementById("myBtn");

readmorebtn.onlclick = function(){
    readmore.style.display="block";
}

var readmorebtn=document.getElementById("myBtn");

readmorebtn.onclick=function () {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();
  //slide for media
var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
}

//print page
var printbutton=document.querySelector('#print');
printbutton.addEventListener('click',()=>{

  window.print();

});