const navBtn = document.querySelector('.toggleNav');
const navBar = document.querySelector('.flex-nav ul');
navBtn.addEventListener('click', function () {
   navBar.classList.toggle('navOpen');
   navBar.classList.toggle('navAnimation');
})