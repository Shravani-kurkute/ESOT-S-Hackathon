document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Perform validation (as before)

      // If validation passes, send data to server using AJAX
      const formData = new FormData(form);

      fetch('process_form.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          if (data.status === 'success') {
              alert(data.message);
              form.reset(); // Optionally reset the form
          } else {
              alert(data.message);
          }
      })
      .catch(error => {
          console.error('Error:', error);
      });
  });
});









