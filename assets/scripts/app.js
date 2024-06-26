window.onscroll = function() {

    var navbar = document.querySelector(".navbar");
    var active = document.querySelector(".navbar-collapse");

    if (window.scrollY > 100) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");      
    }
    active.classList.remove("show");
};
  
var li = document.querySelectorAll(".nav-link");
var sec = document.querySelectorAll("section");

function activemenu() { 
    let len=sec.length;
    
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
        li.forEach(ltx => ltx.classList.remove("active"));
        li[len].classList.add("active")
 }

 activemenu();
 window.addEventListener("scroll",activemenu);



 var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
      else{
        entry.target.classList.remove('show');
      }
    });
 });

 var hidden = document.querySelectorAll('.hidden');
 hidden.forEach((el) => observer.observe(el) );
