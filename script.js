function increase() {
    const frame = document.getElementById('Frame');
    const img = document.getElementById('img');
    
    frame.style.transform = 'scale(1.2)';
    frame.style.transition = 'transform 0.3s ease';
    
    img.style.transform = 'scale(1.2)';
    img.style.transition = 'transform 0.3s ease';
}

// JavaScript function to revert image size on mouseout
function decrease() {
    const frame = document.getElementById('Frame');
    const img = document.getElementById('img');
    
    frame.style.transform = 'scale(1)';
    img.style.transform = 'scale(1)';
}

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');
const links = document.querySelectorAll('a');

hamburger.onclick = function() {
    navBar.classList.toggle('active');
};

links.forEach(link => {
    link.onclick = function() {
        navBar.classList.remove('active');
    };
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
