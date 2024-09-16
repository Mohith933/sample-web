function increase() {
    document.getElementById('Frame').style.transform = 'scale(1.2)';
    document.getElementById('Frame').style.transition = 'transform 0.3s ease';
}

// JavaScript function to revert image size on mouseout
function decrease() {
    document.getElementById('Frame').style.transform = 'scale(1)';
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
