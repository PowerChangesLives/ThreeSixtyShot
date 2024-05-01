
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');

    // Set minimum date to today
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);

    // Set maximum date to ten years from today
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 3652); //3652 is approximately 10 years
    const maxDateString = maxDate.toISOString().split('T')[0];
    dateInput.setAttribute('max', maxDateString);


    // The following code can be used to disable reservations on days on which reservations already exist
    // // Disable specific dates (e.g., weekends)
    // const disabledDates = ['2024-05-01', '2024-05-07', '2024-05-08'];
    // disabledDates.forEach(date => {
    //     const dateOption = document.createElement('option');
    //     dateOption.value = date;
    //     dateOption.textContent = date;
    //     dateInput.appendChild(dateOption);
    // });
});

function submitForm(event) {
    event.preventDefault();

    // Get form values
    const date = document.getElementById('date').value;
    const time = document.getElementById('reservation-time').value;
    const packageType = document.getElementById('reservation-type').value;
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const phone = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const request = document.getElementById('request').value;


    //Submit the form

    // Log form information
    console.log('Reservation Date:', date);
    console.log('Time:', time);
    console.log('Package Type:', packageType);
    console.log('First Name:', fName);
    console.log('Last Name:', lName);
    console.log('Phone Number:', phone);
    console.log('Email Address:', email);
    console.log('Special Request:', request);

    // Hide reservation form
    document.getElementById('reservationForm').classList.add('hidden');

    //Reset the reservation form
    document.getElementById('reservationForm').reset();

    // Display thank you message
    document.getElementById('thankYouMessage').classList.remove('hidden');
    document.getElementById('secondResBtn').classList.remove('hidden');

}


// Function to show the reservation form
function showForm() {
    document.getElementById('reservationForm').classList.remove('hidden');
    document.getElementById('thankYouMessage').classList.add('hidden');
    document.getElementById('secondResBtn').classList.add('hidden');

}

// Event listener for the button with id "secondResBtn"
document.getElementById('secondResBtn').addEventListener('click', showForm);


