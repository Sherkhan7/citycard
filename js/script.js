/*mobile-menu (for hamburger menu)*/
 /*document.querySelectorAll(".animated-icon1").forEach(btn =>
      btn.addEventListener("click", function(event) {
        event.preventDefault();
        btn.classList.toggle("open");
      }));*/
$(document).ready(function () {
  $('.animated-icon1').click(function () {

    $('.animated-icon1').toggleClass('open');
  });
});

$(document).ready(function(){
  $(".menu").click(function(){
    $("#demo").slideToggle("slow");
  });
});
  $(document).ready(function(){
  $(".menu").click(function(){
    $("#bottom-border").fadeToggle("slow");
  });
});
/*menu.onclick=function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("bottom-border");

    if(x.className === "mobile-inner-nav"){
      x.className += " responsive";
      y.className += " responsive";
    }
    else{
      x.className = "mobile-inner-nav";
      y.className = "menu-border";
    } 
}*/
/*menu.onclick=function myFunction() {
  var y = document.getElementById("bottom-border");

    if(y.className === "menu-border"){
      y.className += " responsive";
    }
    else{
      y.className = "menu-border";
    }
  }*/


 /*$(document).ready(function () {
  $('.toggle-btn').click(function () {

    $('.mobile-inner-nav').toggleClass('responsive');
  });
});*/