// Toggle Menu: Opens and closes the hamburger menu with smooth animation
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  if (menu && icon) {
    // Toggle 'open' class for both menu and icon
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    // Adjust max-height for smooth open/close transition
    if (menu.classList.contains("open")) {
      menu.style.maxHeight = menu.scrollHeight + "px";
    } else {
      menu.style.maxHeight = "0";
    }
  }
}

// Smooth Scrolling to Section: Scrolls smoothly to the specified section
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Show Contact Information: Displays the contact popup when called
function showContactInfo() {
  const contactPopup = document.getElementById('contactPopup');
  if (contactPopup) {
    contactPopup.style.display = 'flex';
  }
}

// Hide Contact Information: Hides the contact popup when called
function hideContactInfo() {
  const contactPopup = document.getElementById('contactPopup');
  if (contactPopup) {
    contactPopup.style.display = 'none';
  }
}

// Optional: Event listener for smooth menu toggle (good practice)
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector(".hamburger-icon");
  if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
  }

  const contactButton = document.querySelector(".btn.btn-color-1");
  if (contactButton) {
    contactButton.addEventListener("click", showContactInfo);
  }
});
