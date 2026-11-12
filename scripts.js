
// Get HTML elements
const rsvpForm = document.getElementById('rsvp-form');
const confirmationMessage = document.getElementById('confirmation-message');
const emailInput = document.getElementById('email');
const attendanceSelect = document.getElementById('attendance');

// Listen for form submission
rsvpForm.addEventListener('submit', (event) => {

    // Prevent page from refreshing
    event.preventDefault();

    // Get user information
    const email = emailInput.value.trim();
    const attendance = attendanceSelect.value;

    // Validate form information
    if (!email || !attendance) {
        showMessage(
            'Please complete all fields before submitting.',
            'error'
        );
        return;
    }

    // Display a message depending on attendance
    if (attendance === 'yes') {

        showMessage(
            `🎉 Party on! We look forward to seeing you at the GIF Gala! A confirmation has been prepared for ${email}.`,
            'success'
        );

    } else if (attendance === 'no') {

        showMessage(
            `Thank you for letting us know, ${email}. We're sorry you can't make it. Hopefully, we'll see you next time! 💜`,
            'success'
        );

    }

    // Reset the form after submission
    rsvpForm.reset();

    // Scroll to the confirmation message
    confirmationMessage.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

});

// Function to display confirmation messages
function showMessage(message, type) {

    confirmationMessage.textContent = message;

    confirmationMessage.className = 'confirmation-message';
    confirmationMessage.classList.add(type);

    confirmationMessage.style.display = 'block';
}

