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

    // Display thank you message
    document.getElementById('thankYouMessage').classList.remove('hidden');
    document.getElementById('secondResBtn').classList.remove('hidden');
}
