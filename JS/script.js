const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});
// Grow on click
document.addEventListener('mousedown', () => {
    cursor.style.width = '52px';
    cursor.style.height = '52px';
    cursor.style.background = 'rgba(34,215,255,0.21)';
});
document.addEventListener('mouseup', () => {
    cursor.style.width = '34px';
    cursor.style.height = '34px';
    cursor.style.background = 'rgba(34,215,255,0.09)';
});
// Hover enlarges on links/buttons
document.querySelectorAll('a, button, .project-card').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        cursor.style.borderColor = '#fff';
        cursor.style.width = '48px';
        cursor.style.height = '48px';
    });
    elem.addEventListener('mouseleave', () => {
        cursor.style.borderColor = '#22d7ff';
        cursor.style.width = '34px';
        cursor.style.height = '34px';
    });
});

// Custom Cursor
document.querySelectorAll('.img-hover-group').forEach(group => {
    const btn = group.querySelector('.view-project-btn');
    group.addEventListener('mousemove', function (e) {
        const rect = group.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        btn.style.left = x + 'px';
        btn.style.top = y + 'px';
        btn.style.transform = 'translate(-50%,-50%) scale(1.1)';
    });
    group.addEventListener('mouseenter', function () {
        btn.style.opacity = 1;
    });
    group.addEventListener('mouseleave', function () {
        btn.style.left = '50%';
        btn.style.top = '50%';
        btn.style.opacity = 0;
        btn.style.transform = 'translate(-50%,-50%) scale(1)';
    });
});

document.querySelectorAll('.view-project-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        document.getElementById('custom-cursor').style.display = 'none'; // Hide custom cursor
    });
    btn.addEventListener('mouseleave', () => {
        document.getElementById('custom-cursor').style.display = 'block'; // Show again
    });
});

// ===== FAQ ACCORDION =====
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
});

// ===== CONTACT FORM =====
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });

        // Add focus effects to form inputs
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function () {
                this.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', function () {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }
});

// ===== FOOTER FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function () {
    // Update time display for India (IST)
    function updateTime() {
        const now = new Date();
        // India Standard Time (IST) is UTC+5:30
        const indiaOffsetMs = 5.5 * 60 * 60 * 1000;
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const indiaTime = new Date(utc + indiaOffsetMs);

        const timeString = indiaTime.toLocaleTimeString('en-GB', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const locationTimeElement = document.getElementById('location-time');
        if (locationTimeElement) {
            locationTimeElement.textContent = `India — ${timeString}`;
        }
    }

    // Update time every second
    updateTime();
    setInterval(updateTime, 1000);

    // Smooth scroll to top
    const backToTopLink = document.querySelector('.back-to-top');
    if (backToTopLink) {
        backToTopLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});