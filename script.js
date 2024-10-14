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
//Add the script is
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    // Function to check if section is in view
    function checkSectionInView() {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight && sectionTop >= 0) {
                // Add animation classes when the section is in view
                if (section.id === "Home") {
                    section.querySelector('.Frame').classList.add('scale-in');
                } else {
                    section.classList.add('slide-in');
                }
            }
        });
    }

    // Check on scroll
    window.addEventListener('scroll', checkSectionInView);
    // Initial check on load
    checkSectionInView();
});
