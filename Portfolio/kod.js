

   $(window).on("load",function() {
   	$("#text").css("display", "none");
    //call the image with fadeIn effect
    $("#text").fadeIn(2500 , function(){
        $(this).css("display","normal");
    });

  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".hide").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});


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
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
}).scroll();


//removing advertise for webhost
$(document).ready(function(){
  $('body').find('img[src$="https://cdn.rawgit.com/000webhost/logo/e9bd13f7/footer-powered-by-000webhost-white2.png"]').remove();
})

document.getElementById("page").onmousemove = function(e) {
    document.getElementById("magnify").style.top = e.pageY*1 + "px";
    document.getElementById("magnify").style.left = e.pageX*1 + "px";
}