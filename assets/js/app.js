

var sideBar = document.querySelector(".side-bar");
var sideToggler = document.querySelector(".sideBar-toggler");
var mainContent = document.querySelector('.main-content');
var sideClose = document.querySelector('.sidebar-close');


sideToggler.addEventListener('click', function(){
 	mainContent.classList.toggle("active");
},true);


sideClose.addEventListener('click', function(){
 	mainContent.classList.toggle("active");

 });