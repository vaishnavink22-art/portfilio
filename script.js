document.addEventListener('DOMContentLoaded', function () {

    const feedbackForm = document.getElementById('feedbackForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const clearFeedbackBtn = document.getElementById('clearFeedback');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Load feedback safely
    if (document.getElementById('feedbackList')) {
        loadFeedback();
    }

    // ===== FORM SUBMIT =====
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (e) {
            e.preventDefault();

            clearErrors();
            let isValid = true;

            if (!nameInput.value.trim()) {
                isValid = false;
            }

            if (!isValidEmail(emailInput.value.trim())) {
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                isValid = false;
            }

            if (isValid) {
                const feedback = {
                    id: Date.now(),
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    message: messageInput.value.trim(),
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString()
                };

                saveFeedback(feedback);
                feedbackForm.reset();
                loadFeedback();
            }
        });
    }

    // ===== CLEAR BUTTON =====
    if (clearFeedbackBtn) {
        clearFeedbackBtn.addEventListener('click', function () {
            localStorage.removeItem('portfolioFeedback');
            loadFeedback();
        });
    }

    // ===== MOBILE MENU =====
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
});