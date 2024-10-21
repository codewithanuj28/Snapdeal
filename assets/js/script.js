'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}
var ProductImg = document.getElementById("productImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function()
{
   ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function()
{
   ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function()
{
   ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function()
{
   ProductImg.src = SmallImg[3].src;
}
var MenuItems = document.getElementById("MenuItems");
var MenuItem = document.getElementById("inneritems");
MenuItems.style.maxHeight = "0px";

function menutoggle(){
  if(MenuItems.style.maxHeight == "0px")
  {
   MenuItems.style.maxHeight = "200px";
  }
  else
  {

      MenuItems.style.maxHeight = "0px";
  }
 
}
function menutoggl(){
  if(MenuItem.style.display == "block")
  {
   MenuItem.style.display = "none";
  }
  else
  {
   MenuItem.style.display = "block";
  }
 
}
