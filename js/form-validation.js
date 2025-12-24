// Form Validation Script
(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contactForm');
        
        if (!form) return;

        // Validation patterns
        const patterns = {
            name: /^[a-zA-Z\s]{2,50}$/,
            phone: /^[6-9][0-9]{9}$/,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: /^.{10,500}$/
        };

        // Error messages
        const errorMessages = {
            name: 'Please enter a valid name (2-50 characters, letters only)',
            phone: 'Please enter a valid Indian phone number (10 digits starting with 6-9)',
            email: 'Please enter a valid email address',
            message: 'Please enter a message (10-500 characters)',
            consent: 'You must consent to continue'
        };

        // Validate individual field
        function validateField(field) {
            const fieldName = field.name;
            const fieldValue = field.value.trim();
            const errorElement = document.getElementById(fieldName + 'Error');
            
            let isValid = true;
            let errorMessage = '';

            // Check if field is empty
            if (!fieldValue && field.hasAttribute('required')) {
                isValid = false;
                errorMessage = `${field.placeholder} is required`;
            } 
            // Validate against pattern
            else if (fieldValue && patterns[fieldName]) {
                if (!patterns[fieldName].test(fieldValue)) {
                    isValid = false;
                    errorMessage = errorMessages[fieldName];
                }
            }

            // Update UI
            if (errorElement) {
                errorElement.textContent = errorMessage;
            }
            
            if (isValid) {
                field.classList.remove('error');
                field.classList.add('success');
            } else {
                field.classList.remove('success');
                field.classList.add('error');
            }

            return isValid;
        }

        // Validate checkbox
        function validateConsent() {
            const consentCheckbox = document.getElementById('consent');
            const errorElement = document.getElementById('consentError');
            
            if (!consentCheckbox.checked) {
                errorElement.textContent = errorMessages.consent;
                return false;
            } else {
                errorElement.textContent = '';
                return true;
            }
        }

        // Add real-time validation
        const fields = form.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], textarea');
        fields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });

            field.addEventListener('input', function() {
                // Clear error on input
                if (this.classList.contains('error')) {
                    const errorElement = document.getElementById(this.name + 'Error');
                    if (errorElement) {
                        errorElement.textContent = '';
                    }
                    this.classList.remove('error');
                }
            });
        });

        // Consent checkbox validation
        const consentCheckbox = document.getElementById('consent');
        if (consentCheckbox) {
            consentCheckbox.addEventListener('change', validateConsent);
        }

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate all fields
            let isFormValid = true;
            fields.forEach(field => {
                if (!validateField(field)) {
                    isFormValid = false;
                }
            });

            // Validate consent
            if (!validateConsent()) {
                isFormValid = false;
            }

            if (isFormValid) {
                // Show success message
                const successMessage = document.getElementById('successMessage');
                if (successMessage) {
                    successMessage.style.display = 'block';
                }

                // Reset form after 2 seconds
                setTimeout(function() {
                    form.reset();
                    fields.forEach(field => {
                        field.classList.remove('success', 'error');
                    });
                    if (successMessage) {
                        successMessage.style.display = 'none';
                    }
                }, 3000);

                // Here you would typically send the form data to your server
                console.log('Form submitted successfully!');
                
                // Example: Send data via AJAX
                // const formData = new FormData(form);
                // fetch('/api/contact', {
                //     method: 'POST',
                //     body: formData
                // }).then(response => response.json())
                //   .then(data => console.log(data));
            } else {
                // Scroll to first error
                const firstError = form.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
            }
        });
    });
})();
