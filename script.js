// MOBILE MENU TOGGLE
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// CLOSE MENU ON LINK CLICK
document.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
    });
});

// FORM SUBMISSION ANIMATION MOCK
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Show loading or directly activate success view
    const overlay = document.getElementById('success-overlay');
    if (overlay) {
        overlay.classList.add('active');
    }
    
    // Optionally reset form fields
    document.getElementById('lead-form').reset();
}

function closeSuccess() {
    const overlay = document.getElementById('success-overlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

// COOKIE BANNER LOGIC
window.addEventListener('DOMContentLoaded', () => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.style.display = 'block';
    }
});

function acceptCookies() {
    localStorage.setItem('cookie-consent', 'accepted');
    hideCookieBanner();
}

function rejectCookies() {
    localStorage.setItem('cookie-consent', 'rejected');
    hideCookieBanner();
}

function hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
}
