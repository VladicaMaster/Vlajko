
//slider
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
   /* if (i == n) dots.html = 'fa fa-circle';
     else dots.html = 'fa fa-circle-thin';*/
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}


//courusel

var currentSection = 1;
var sections;

$('document').ready(function () {
  setCurrentSection();
  setSectionIndicator(1);
  $('.navigation').click(function () {
    if (this.id == "nav-left") { 
      if (currentSection != 1) {
        scrollToSection(currentSection - 1);
        $('#nav-left').prop('disabled', true);
      }
    }
    else  {
      if (currentSection+1 <= sections) {
        scrollToSection(currentSection + 1);
        $('#nav-right').prop('disabled', true);
      }
    }
  });


//moj kod infiniti
  $(this).find(".navigation").click(function(){
         var curr= $(".project");
        var last= curr.last();
        var first = curr.first();
        var width= $('.project').width()
        
       if(this.id =='nav-right'){
          first.insertAfter(last);
          
        }
        else if(this.id =='nav-left'){
           last.insertBefore(first);
        }
       })


    return this;
  });    
/*
  $('.navigation').on('mouseover', function() {
    if (this.id == 'nav-left') {
      if (currentSection != 1) $(this).addClass('navigation-hover');
    } else {
      if (currentSection+1 <= sections) $(this).addClass('navigation-hover');
    }
  }).on('mouseout', function () {
    $(this).removeClass('navigation-hover');
  });
*/
  $(window).resize(function() {
    setCurrentSection();
    setSectionIndicator(currentSection);
  });



function setCurrentSection() {
  var carouselWidth = $('.project').width();
  var projectWidth = $('.project').width() + parseInt($('.project').css('margin-right').replace('px',''));
  var projectsQtt = $('.project').size();
  var projectsPerSection = carouselWidth / projectWidth;
  sections = Math.round(projectsQtt / projectsPerSection);
  var rollLeft = Math.abs(parseInt($('.project').css('left').replace('px','')));
  if (rollLeft == 0) currentSection = 1;
  else {
    currentSection = Math.round((rollLeft / carouselWidth) + 1);
  }
  $('#nav-left').prop('disabled', false);
  $('#nav-left').removeClass('navigation-hover');
  $('#nav-right').prop('disabled', false);
  $('#nav-right').removeClass('navigation-hover');
}

function scrollToSection(section) {
  var width = $('.project').width() * (Math.abs(currentSection - section));
  if (section < currentSection) {
    $('.project').animate({left: '+='+width}, "slow", setCurrentSection);
  } else {
    $('.project').animate({left: '-='+width}, "slow", setCurrentSection);
  }
  setSectionIndicator(section);
}

function setSectionIndicator(section) {
  $('.sections').html('');
  for (var i = 1; i <= sections; i++) {
    if (i == section) circleClass = 'fa fa-circle';
    else circleClass = 'fa fa-circle-thin';
    $('.sections').html($('.sections').html() + '<i class="'+circleClass+' indicator" data-id="'+i+'" aria-hidden="true"></i>');
  }
  $('.indicator').click(function() {
    scrollToSection($(this).attr('data-id'));
  });
}


$(window).on("load",function() {
    $(".centered").css("display", "none");
    //call the image with fadeIn effect
    $(".centered").slideDown(1000 , function(){
        $(this).css("display","normal");
    })
  });