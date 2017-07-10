var fadeInInt = 1000;
$(".info div").each(function(i){
  $(this).delay(fadeInInt * i).fadeIn(fadeInInt);
 fadeInInt=500;
});
