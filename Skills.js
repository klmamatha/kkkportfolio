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