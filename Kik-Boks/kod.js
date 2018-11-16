

//adding class by click
$(document).ready(function() {
    $('li a').click(function(event) {
    var offset = $($(this).attr("href")).offset().top;
  
    $('html, body').animate({
      scrollTop: offset + 'px'
    },500);     
    $('li a').removeClass('active');
    $(this).addClass('active')
    event.preventDefault();
  });
});



   

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

  
    // Assign active class to nav links while scolling
    $('.page').each(function(i) {
        if ($(this).position().top <= scrollDistance ) {
            $('li a.active').removeClass('active');
            $('li a').eq(i).addClass('active');
        }
    });
}).scroll();




//slider
(function() {
  var $slides = document.querySelectorAll('.slide');
  var $controls = document.querySelectorAll('.slider__control');
  var numOfSlides = $slides.length;
  var slidingAT = 1300; // sync this with scss variable
  var slidingBlocked = false;

  [].slice.call($slides).forEach(function($el, index) {
    var i = index + 1;
    $el.classList.add('slide-' + i);
    $el.dataset.slide = i;
  });

  [].slice.call($controls).forEach(function($el) {
    $el.addEventListener('click', controlClickHandler);
  });

  function controlClickHandler() {
    if (slidingBlocked) return;
    slidingBlocked = true;

    var $control = this;
    var isRight = $control.classList.contains('m--right');
    var $curActive = document.querySelector('.slide.s--active');
    var index = +$curActive.dataset.slide;
    (isRight) ? index++ : index--;
    if (index < 1) index = numOfSlides;
    if (index > numOfSlides) index = 1;
    var $newActive = document.querySelector('.slide-' + index);

    $control.classList.add('a--rotation');
    $curActive.classList.remove('s--active', 's--active-prev');
    document.querySelector('.slide.s--prev').classList.remove('s--prev');
    
    $newActive.classList.add('s--active');
    if (!isRight) $newActive.classList.add('s--active-prev');
    

    var prevIndex = index - 1;
    if (prevIndex < 1) prevIndex = numOfSlides;

    document.querySelector('.slide-' + prevIndex).classList.add('s--prev');

    setTimeout(function() {
      $control.classList.remove('a--rotation');
      slidingBlocked = false;
    }, slidingAT*0.75);
  };
}());


//galerija2
var numberOfImages = 56;
var index;

function closeup(link, id)
{
  var div = document.getElementById('myCloseup');
  var span = document.getElementsByClassName("close")[0];
  var back = document.getElementsByClassName("back")[0];
  index=parseInt(id);

    div.style.display = "block";

   // Dodajem sliku
   var img = document.createElement("img");
 
   img.id = "slika";
   img.src = link;
   var pic = document.getElementById("picture");
 
   pic.appendChild(img);

    span.onclick = function() {
    div.style.display = "none";
    pic.removeChild(img);

    }

    div.onclick = function(event) {
    if (event.target == div) {
        div.style.display = "none";
        pic.removeChild(img);
    }
   }

   back.onclick = function(){
    div.style.display = "none";
    pic.removeChild(img);
   }

}

function left()
{
    
   if(index>1)
   {  
   var img = document.getElementById("slika");
   var num = index-1;
   
   var new_img = document.getElementById(num.toString());

   img.src = new_img.src;
   index = num;
  }

 }

function right()
{

  if(index<56)
  {
   var img = document.getElementById("slika");
   var num = parseInt(index)+1;

   var new_img = document.getElementById(num.toString());

   if(num)
   img.src = new_img.src;
   index = num;
 }

 
 }



//galerija1
"use strict";
$(document).ready(function() {

  var rows = 4; //change this also in css
  var cols = 6; //change this also in css
  var staggerTime = 150;

  var urls = [
    "images/gasa1.jpg",
    "images/gasa2.jpg",
    "images/gasa3.jpg",
    "images/gasa4.jpg",
    "images/gasa5.jpg",
    "images/gasa6.jpg",
    "images/gasa7.jpg",
    "images/kbs4.jpg",
    "images/gasa9.jpg",
    "images/gasa10.jpg",
    "images/gasa11.jpg",
    "images/gasa12.jpg",
    "images/gasa13.jpg",
    "images/gasa14.jpg",
    "images/gasa15.jpg",
    "images/gasa16.jpg",
    "images/gasa17.jpg",
    "images/gasa18.jpg",
    "images/gasa19.jpg",
    "images/gasa20.jpg",
    "images/gasa21.jpg",
    "images/gasa22.jpg",
    "images/gasa23.jpg",
    "images/kbs7.jpg"
  ];

  var $gallery = $(".demo__gallery");
  var $help = $(".demo__help");
  var partsArray = [];
  var reqAnimFr = (function() {
    return window.requestAnimationFrame || function(cb) {
      setTimeout(cb, 1000 / 60);
    }
  })();

  for (let row = 1; row <= rows; row++) {
    partsArray[row - 1] = [];
    for (let col = 1; col <= cols; col++) {
      $gallery.append(`<div class="show-front demo__part demo__part-${row}-${col}" row="${row}" col="${col}"><div class="demo__part-back"><div class="demo__part-back-inner"></div></div><div class="demo__part-front"></div></div>`);
      partsArray[row - 1][col - 1] = new Part();
    }
  }

  var $parts = $(".demo__part");
  var $image = $(".demo__part-back-inner");
  var help = true;

  for (let i = 0; i < $parts.length; i++) {
    $parts.find(".demo__part-front").eq(i).css("background-image", `url(${urls[i]})`);
  }

  $gallery.on("click", ".demo__part-front", function() {

    $image.css("background-image", $(this).css("background-image"));
    if (help) {
     
      help = false;
    }

    let row = +$(this).closest(".demo__part").attr("row");
    let col = +$(this).closest(".demo__part").attr("col");
    waveChange(row, col);
  });

  $gallery.on("click", ".demo__part-back", function() {
    if (!isShowingBack()) return;

   

    setTimeout(function() {
      for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
          partsArray[row - 1][col - 1].showing = "front";
        }
      }
    }, staggerTime + $parts.length * staggerTime / 10);
    
    
    showFront(0, $parts.length);
    
  });
  
  function showFront(i, maxI) {
    if (i >= maxI) return;
    $parts.eq(i).addClass("show-front");
    
    reqAnimFr(function() {
      showFront(i + 1);
    });
  }

  function isShowingBack() {
    return partsArray[0][0].showing == "back" && partsArray[0][cols - 1].showing == "back" && partsArray[rows - 1][0].showing == "back" && partsArray[rows - 1][cols - 1].showing == "back";
  }

  function Part() {
    this.showing = "front";
  }

  function waveChange(rowN, colN) {
    if (rowN > rows || colN > cols || rowN <= 0 || colN <= 0) return;
    if (partsArray[rowN - 1][colN - 1].showing == "back") return;
    $(".demo__part-" + rowN + "-" + colN).removeClass("show-front");
    partsArray[rowN - 1][colN - 1].showing = "back";
    setTimeout(function() {
      waveChange(rowN + 1, colN);
      waveChange(rowN - 1, colN);
      waveChange(rowN, colN + 1);
      waveChange(rowN, colN - 1);
    }, staggerTime);
  }
});


//moving element as mouse moves
//Creates an event that fires every time the mouse moves over any div with the class of "img".
$(".img").mousemove(function(event){
  
  //Both the x and y value are calculated by taking the mouse x,y position on the page and subtracting it from the x,y position of the image on the page. "this" is the hovered element with the class of "img"
  var mousex = event.pageX - $(this).offset().left;
  var mousey = event.pageY - $(this).offset().top;
  
  
  //If you just used the mouse position values the translation effect will only go up and to the right, by subtracting half of the length / width of the imagevfrom the values  we get either a positive or negitive number so that the image will move in any direction.
  
  //The 40 controls the amount of "movement" that will happen by giving us a smaller number, feel free to change it to get the effect that you want.
  var imgx = (mousex - 300) / 40;
  var imgy = (mousey - 200) / 40;
  
  //Adds a translation css styles to the image element
  $(this).css("transform", "translate(" + imgx + "px," + imgy + "px)");
});

//This function will fire every time the user mouses off of the image. It resets the translation back to 0.
$(".img").mouseout(function(){
  $(this).css("transform", "translate(0px,0px)");
});