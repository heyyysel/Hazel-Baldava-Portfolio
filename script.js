function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToSection(sectionId) {
  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showContactInfo() {
  document.getElementById('contactPopup').style.display = 'flex';
}

function hideContactInfo() {
  document.getElementById('contactPopup').style.display = 'none';
}
