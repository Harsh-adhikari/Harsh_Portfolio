// Hamburger menu toggle function
const hamburger = document.querySelector('.hamb');
const navList = document.querySelector('.nav-list ul');
const header = document.querySelector('#header .header');
const navLinks = document.querySelectorAll('.nav-list ul li a');

// Add event listener to hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// Close mobile menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    });
});

// Change header background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(31, 30, 30, 0.9)';
    } else {
        header.style.backgroundColor = 'rgba(31, 30, 30, 0.24)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Skill item click handler
function handleClick(skillName) {
    alert(`You clicked on ${skillName}! This could open a modal with more details about your experience with ${skillName}.`);
}

// Add animation for sections when they come into view
const sections = document.querySelectorAll('section');
const animateOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Initialize section animations
sections.forEach(section => {
    if (section.id !== 'header' && section.id !== 'one') {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }
});

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);
// Initial check for animations on page load
window.addEventListener('load', animateOnScroll);

// Add year to copyright in footer
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const copyrightText = document.querySelector('#footer p');
    copyrightText.textContent = `© 2023 - ${currentYear} | Designed & coded by Harsh Adhikari`;
});