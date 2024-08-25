document.addEventListener('DOMContentLoaded', function () {
  const subscribeButton = document.querySelector('.newsletter button');
  const emailInput = document.querySelector('.newsletter input[type="email"]');

  subscribeButton.addEventListener('click', function () {
    const email = emailInput.value.trim();
    if (isValidEmail(email)) {
      // Send the email to your backend for processing
      alert('Email subscribed: ' + email);
      // Clear the input field after subscribing
      emailInput.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  });

  function isValidEmail(email) {
    // Simple email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
