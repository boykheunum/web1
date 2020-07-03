/*dropdown menu*/
$(document).ready(function () {
   $('.menu li').hover(function () {
      $(this).find("ul:first").slideDown(500);/*khi hover chuot thi se hien ra bang menu*/
   }, function () {
      $(this).find("ul:first").hide(100);/*khi bo hover thi se bien mat*/
   }

   );

   $('.taikhoan li').hover(function () {
      $(this).find("ul:first").slideDown(500);/*khi hover chuot thi se hien ra bang menu*/
   }, function () {
      $(this).find("ul:first").hide(100);/*khi bo hover thi se bien mat*/
   }

   );
   
});
/*slide anh*/
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
   var slides = document.getElementsByClassName("slide");
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length) { slideIndex = 1 }
   if (n < 1) { slideIndex = slides.length }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";
   setTimeout(showSlides, 2000);
}
