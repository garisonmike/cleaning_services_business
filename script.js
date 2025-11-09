// Form Validation and Submission
document.addEventListener('DOMContentLoaded', function () {

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !phone || !service || !date) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            if (!validateEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Phone validation
            if (!validatePhone(phone)) {
                showMessage('Please enter a valid phone number.', 'error');
                return;
            }

            // Date validation (should be in the future)
            if (!validateDate(date)) {
                showMessage('Please select a future date.', 'error');
                return;
            }

            // If all validations pass
            showMessage('Thank you! Your booking request has been submitted. We will contact you shortly.', 'success');

            // Reset form
            contactForm.reset();
        });
    }

    // Set minimum date for date input to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Phone validation function
function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Date validation function
function validateDate(date) {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
}

// Show message function
function showMessage(message, type) {
    const messageDiv = document.getElementById('formMessage');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = 'form-message ' + type;

        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Hide message after 5 seconds if success
        if (type === 'success') {
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    }
}

// Book Service function (called from services page)
function bookService(serviceName) {
    // Store selected service in session storage
    sessionStorage.setItem('selectedService', serviceName);

    // Redirect to contact page
    window.location.href = 'contact.html';
}

// Pre-fill service if coming from services page
document.addEventListener('DOMContentLoaded', function () {
    const serviceSelect = document.getElementById('service');
    const selectedService = sessionStorage.getItem('selectedService');

    if (serviceSelect && selectedService) {
        // Map service names to select options
        const serviceMap = {
            'General House Cleaning': 'general',
            'Laundry & Ironing': 'laundry',
            'Kitchen Cleaning': 'kitchen',
            'Bathroom Cleaning': 'bathroom',
            'Window Cleaning': 'windows',
            'Deep Cleaning': 'deep'
        };

        const serviceValue = serviceMap[selectedService];
        if (serviceValue) {
            serviceSelect.value = serviceValue;
        }

        // Clear the stored service
        sessionStorage.removeItem('selectedService');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to current page in navigation
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
