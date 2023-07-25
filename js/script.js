// PRELOADER
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');

  document.body.style.overflow = 'hidden';

  setTimeout(function() {
    preloader.style.display = 'none';

    document.body.style.overflow = 'visible';
  }, 2000);
});





// ChangeNabarColor

const nav = document.querySelector('nav');

function navbarChangeColor() {
  var scrollPos = window.scrollY;

  if(scrollPos > 50){
    nav.style.backgroundColor = '#0f172b';
  }else{
    nav.style.backgroundColor = 'transparent';
  }

}

window.onscroll = navbarChangeColor;



const checkbox = document.querySelector('input[type=checkbox]');
let navbar = document.querySelector('.navigation');
let closeNavbar = document.querySelector(".close-nav");


checkbox.addEventListener("change", function() {
  if (check.checked) {
    navbar.style.left = '0';
    closeNavbar.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    navbar.style.left = '-100%';
    closeNavbar.style.display = 'none';
    document.body.style.overflow = 'visible';
  }
});




document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const btnDropdown = dropdown.querySelector('.btnDropdown');
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  btnDropdown.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
      dropdownContent.style.display = 'none';
    }
  });
});




// MENU TOGGLE
const breakfastMenu = document.getElementById('breakfast');
const lunchMenu = document.getElementById('lunch');
const dinnerMenu = document.getElementById('dinner');
//const btnToggle = document.querySelectorAll('.toggleBtn');
const btnToggle1 = document.querySelector('.toggleBtn1');
const btnToggle2 = document.querySelector('.toggleBtn2');
const btnToggle3 = document.querySelector('.toggleBtn3');

function breakfast() {

  breakfastMenu.style.display = 'block';
  lunchMenu.style.display = 'none';
  dinnerMenu.style.display = 'none';
  btnToggle1.style.borderBottom ='2px solid #fea116';
  btnToggle2.style.borderBottom ='none';
  btnToggle3.style.borderBottom ='none';
}

function lunch() {
  lunchMenu.style.display = 'block';
  dinnerMenu.style.display = 'none';
  breakfastMenu.style.display = 'none';
  btnToggle2.style.borderBottom ='2px solid #fea116';
  btnToggle1.style.borderBottom ='none';
  btnToggle3.style.borderBottom ='none';
}

function dinner() {
  dinnerMenu.style.display = 'block';
  lunchMenu.style.display = 'none';
  breakfastMenu.style.display = 'none';
  btnToggle3.style.borderBottom ='2px solid #fea116';
  btnToggle2.style.borderBottom ='none';
  btnToggle1.style.borderBottom ='none';
}





// SHOW & HIDE VIDEO
let videoFilter = document.querySelector('.video-filter');

function show () {
  document.body.style.overflow = 'hidden';
  videoFilter.style.display = "block";
  document.getElementById("video_show").style.display = "block";
}

function hide () {
  document.getElementById("video_show").style.display = "none";
  videoFilter.style.display = "none";
  document.body.style.overflow = 'visible';
}






// SWIPER
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  fade: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints :{
    0: {
        slidesPerView: 1,
    },
    601: {
        slidesPerView: 2,
    },
    950: {
        slidesPerView: 3,
    },
},
});

// YEAR UPDATE
let yearUpdate = new Date().getFullYear();
let newYear = document.getElementById("year");
newYear.textContent = yearUpdate;


// WOW ANIMATION
new WOW().init();


// COUNTER UP
$('.counter').countUp();
