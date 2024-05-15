document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.contact_form');
    const response = document.getElementById('response');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var fName = document.getElementById('first_name').value.trim();
        var lName = document.getElementById('last_name').value.trim();
        var email = document.getElementById('email_addr').value.trim();
        var phone = document.getElementById('phone_input').value.trim();
        var message = document.getElementById('message').value.trim();

        if (fName === '' || lName === '' || email === '' || message === '' || phone === '') {
            console.error('Error: Please fill in all fields.'); // Log error message
            alert('Please fill in all fields.');
            return;
        }

        var name = fName + " " + lName;
        var messageBody = "Someone used the 'contact us' form:" + "\n\n\n" +
            "Name: " + fName + " " + lName + "\n\n" +
            "Contact phone: " + phone + "\n\n" +
            "Contact email: " + email + "\n\n" +
            "Message from Contact: " + message;

        // Send AJAX request to PHP script
        console.log("Line 24: Starting AJAX request to PHPMailer script");
        //
        // var xmlHttpRequest = new XMLHttpRequest();
        // xmlHttpRequest.open('POST', '../model/sendContactUsForm.php', true);
        // xmlHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //
        // xmlHttpRequest.onreadystatechange = function() {
        //     if (xmlHttpRequest.readyState === XMLHttpRequest.DONE) {
        //         if (xmlHttpRequest.status === 200) {
        //             // Handle successful response
        //             console.log("Line 33: AJAX request successful");
        //             console.log(xmlHttpRequest.responseText);
        //             response.innerText = `Thank you, ${fName}! We have received your message.`;
        //             form.reset();
        //             const formElements = document.querySelectorAll('.contact-form');
        //             formElements.forEach(element => {
        //                 element.classList.add('hidden');
        //             });
        //         } else {
        //             console.error('Line 41: Error occurred during AJAX request:', xmlHttpRequest.status);
        //             alert('An error occurred while submitting the form. Please try again later.');
        //         }
        //     }
        // };
        //
        // xmlHttpRequest.onerror = function() {
        //     console.error('Line 51: Network error occurred during AJAX request');
        //     alert('Network error occurred. Please try again later.');
        // };
        //
        // xmlHttpRequest.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(messageBody));

        console.log("Line 57: Attempting to send the contact message:");
        console.log("Line 58: Message: " + messageBody);
    });
});
