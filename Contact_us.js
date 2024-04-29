document.addEventListener('DOMContentLoaded', function() {
    // Access the form element
    var form = document.querySelector('.contact-form form');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Validate form inputs
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // If all fields are filled, you can proceed with form submission
        // For example, you can send the form data to a server using AJAX or fetch API
        // Here, I'm just logging the form data
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Optionally, you can reset the form after successful submission
        form.reset();
    });
});

