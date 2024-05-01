// Define the ReservationDataObject constructor function
function ReservationDataObject(date, time, packageType, fName, lName, phone, email, request) {
    this.date = date;
    this.time = time;
    this.packageType = packageType;
    this.fName = fName;
    this.lName = lName;
    this.phone = phone;
    this.email = email;
    this.request = request;
}

// Usage example:
// Create a new ReservationDataObject instance
const reservationData = new ReservationDataObject(
    '2024-05-01',
    '12:00 PM',
    'Premium Package',
    'John',
    'Doe',
    '123-456-7890',
    'johndoe@example.com',
    'Special requests go here.'
);

// Accessing the attributes of the object
console.log('Reservation Date:', reservationData.date); // Output: 2024-05-01
console.log('Time:', reservationData.time); // Output: 12:00 PM
console.log('Package Type:', reservationData.packageType); // Output: Premium Package
console.log('First Name:', reservationData.fName); // Output: John
console.log('Last Name:', reservationData.lName); // Output: Doe
console.log('Phone Number:', reservationData.phone); // Output: 123-456-7890
console.log('Email Address:', reservationData.email); // Output: johndoe@example.com
console.log('Special Request:', reservationData.request); // Output: Special requests go here.
