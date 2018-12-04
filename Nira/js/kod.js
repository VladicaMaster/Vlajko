
//slider
var stp;
var fadeOut;
function loadSlider(){

  stp=setInterval(function(){showSlides(slideIndex += 1)}, 5000)
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {

  showSlides(slideIndex += n);
}

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
     fadeOut =  setTimeout(fading, 2500);
      setTimeout(fadeIng, 5000);
      slides[i].style.display = "none";  
  }
  /*
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += "active";

}



function StopFunction()
{
  clearInterval(stp);

}

document.getElementById('stop').addEventListener('mouseleave', loadSlider)


function fading (){
$(".centered").hide()}

function fadeIng(){
  $(".centered").show()
}

function fade(){
  clearInterval(fadeOut);
}

//document.getElementById('stop').addEventListener('mouseover',fade)










