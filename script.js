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
