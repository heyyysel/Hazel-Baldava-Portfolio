function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // Function to show the contact info popup
function showContactInfo() {
  document.getElementById('contactPopup').style.display = 'flex'; // Show popup
}

// Function to toggle the menu popup
function toggleMenu() {
  const popup = document.getElementById('contactPopup');
  popup.style.display = (popup.style.display === 'flex') ? 'none' : 'flex'; // Toggle display
}
function hideContactInfo() {
    document.getElementById('contactPopup').style.display = 'none';
}
