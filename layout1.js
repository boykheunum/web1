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

//slide anh game
//  document.addEventListener('DOMContentLoaded', (event) => {
//  var KichThuoc = document.getElementsByClassName("khoislide")[0].clientWidth;
//  var ChuyenSlide = document.getElementsByClassName("cacslide")[0];
//  var Img = ChuyenSlide.getElementsByTagName("img");
//  var Max = KichThuoc * Img.length;
//  Max -= KichThuoc;
//  var Chuyen = 0;
//  function Next(){
//  	if(Chuyen < Max) Chuyen += KichThuoc;
//  	else Chuyen = 0;
//  	ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
//  }

//  function Back(){
//  	if(Chuyen == 0) Chuyen = Max;
//  	else Chuyen -= KichThuoc;
//  	ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
//  }
//  })

var KichThuoc;
var ChuyenSlide;
var Img;
var Max;
document.addEventListener('DOMContentLoaded', (event) => { 
KichThuoc = document.getElementsByClassName("khoislide")[0].clientWidth;
ChuyenSlide = document.getElementsByClassName("cacslide")[0];
Img = ChuyenSlide.getElementsByTagName("img");
Max = KichThuoc * Img.length-800;
})
Max -= KichThuoc;
var Chuyen = 0;

function Next() {
   if (Chuyen < Max) Chuyen += KichThuoc;
   else Chuyen = 0;
   console.log(Chuyen+ " " + Max);
   ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
}

function Back() {
   if (Chuyen == 0) Chuyen = Max;
   else Chuyen -= KichThuoc;
   ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
}

setInterval(function(){
   Next();
},3000);