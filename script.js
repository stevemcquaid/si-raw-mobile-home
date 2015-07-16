$( document ).ready(function() {
  $( ".header" ).next( ".content" ).hide();
  
  $(".header").click(function () {
    $(this).next(".content").slideToggle(500);
  });
});


