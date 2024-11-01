document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.querySelector('.popup-overlay');
    const connectButton = document.querySelector('.topmate-button');
    const closeButton = document.querySelector('.close-button');

    // Open the popup when the "Let's Connect" button is clicked
    connectButton.addEventListener('click', () => {
        setPopupOpen(true);
    });

    // Close the popup when the overlay or close button is clicked
    popupOverlay.addEventListener('click', closePopup);
    closeButton.addEventListener('click', closePopup);

    // Function to open the popup
    function setPopupOpen(isOpen) {
        popupOverlay.style.display = isOpen ? 'flex' : 'none';
    }

    // Function to close the popup
    function closePopup() {
        setPopupOpen(false);
    }

    // Resume download button functionality
    const resumeButton = document.querySelector('.btn-box');
    resumeButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('kranthi_resume.pdf', '_blank');
    });

    // Social media links functionality
    const socialLinks = document.querySelectorAll('.home-sci a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(link.href, '_blank');
        });
    });
});
const typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "ReactJs Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for links
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute("href");
            window.location.href = targetPage;
        });
    });
});

// Fixed navbar when scrolling
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
