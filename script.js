const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav-container');

hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    hamburger.classList.toggle('active');
});