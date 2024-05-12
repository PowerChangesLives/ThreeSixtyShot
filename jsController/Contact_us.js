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
        console.log("Starting: // Send AJAX request to PHP script (Line 27")


        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open('POST', '../model/phpMailer.php', true);
        xmlHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        const response = document.getElementById('response');
        xmlHttpRequest.onreadystatechange = function() {
            if (xmlHttpRequest.readyState === XMLHttpRequest.DONE && xmlHttpRequest.status === 200) {
                // Handle successful response
                console.log(xmlHttpRequest.responseText);
                // Simulate response
                response.innerText = `Thank you, ${fName}! We have received your message.`;
                form.reset();
                const formElements = document.querySelectorAll('.contact-form');
                formElements.forEach(element => {
                    element.classList.add('hidden');
                });
            }
        };

        xmlHttpRequest.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(messageBody));

        console.log("Attempting to send the contact message: " + "\n\n" + "Message: " + messageBody)
    });
});
