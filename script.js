const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');
const links = document.querySelectorAll('a');
hamburger.onclick = function(){
    navBar.classList.toggle('active');
}
links.forEach(link => {
    link.onclick = function(){
        navBar.classList.remove('active');
    }

});
