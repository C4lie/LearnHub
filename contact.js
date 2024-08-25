document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.vertical-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch('https://submit-form.com/your-form-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert('Form submitted successfully!');
          form.reset();
        } else {
          alert('Failed to submit form.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
      });
  });
});
