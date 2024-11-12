function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to show/hide the contact info
function showContactInfo() {
  const contactInfo = document.getElementById("contact-info");
  if (contactInfo.style.display === "none" || contactInfo.style.display === "") {
    contactInfo.style.display = "block"; 
  } else {
    contactInfo.style.display = "none"; 
  }
}
function scrollToSection(sectionId) {
  const element = document.querySelector(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
}
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname === '/thank-you.html') {
    // Check if we're on the thank you page (you can also use local storage or URL parameters to track form submission)
    setTimeout(function () {
      // This will redirect to the desired page after 3 seconds (adjust as needed)
      window.location.href = '/thank-you.html';
    }, 3000);
  }
});
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const navLinks = document.querySelector('.nav-links');

  hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerIcon.classList.toggle('open');
  });