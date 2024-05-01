document.addEventListener('DOMContentLoaded', function() {


    // Access the form element
    var form = document.querySelector('.contact-form form');
    const response = document.getElementById('response');

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



        // Simulating form submission (replace with actual AJAX request)
        setTimeout(() => {
            response.textContent = `Thank you, ${name}! We have received your message.`;
            form.reset();

            // Hide form elements
            const formElements = document.querySelectorAll('#contact-form');
            formElements.forEach(element => {
                element.classList.add('hidden');
            });

        }, 1000);



    });
});

