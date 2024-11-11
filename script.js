// Toggle Menu: Opens and closes the hamburger menu with smooth animation
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    // Smoothly open the menu
    menu.style.maxHeight = menu.classList.contains("open") ? `${menu.scrollHeight}px` : "0";
  }
}

// Smooth Scrolling to Section: Scrolls smoothly to the specified section
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

// Show Contact Information: Displays the contact popup when called
function showContactInfo() {
  const contactPopup = document.getElementById('contactPopup');
  
  if (contactPopup) {
    contactPopup.style.display = 'flex'; // Show the popup
  }
}

// Hide Contact Information: Hides the contact popup when called
function hideContactInfo() {
  const contactPopup = document.getElementById('contactPopup');
  
  if (contactPopup) {
    contactPopup.style.display = 'none'; // Hide the popup
  }
}

// Close popup when clicked outside
function closePopupOnClickOutside(event) {
  const contactPopup = document.getElementById('contactPopup');
  if (contactPopup && !contactPopup.contains(event.target)) {
    contactPopup.style.display = 'none'; // Close popup if clicked outside
  }
}

// Event listeners for menu toggle and contact button
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector(".hamburger-icon");
  const contactButton = document.querySelector(".btn.btn-color-1"); // Ensure this is the correct button

  if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
  }
  
  if (contactButton) {
    contactButton.addEventListener("click", showContactInfo); // Open contact popup
  }

  // Add event listener for closing the contact popup when clicked outside
  document.addEventListener("click", closePopupOnClickOutside);
});
