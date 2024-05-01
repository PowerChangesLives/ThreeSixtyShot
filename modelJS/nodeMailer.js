

//Note: I got the settings info from: https://www.ipage.com/help/article/email-client-setup

const nodemailer = require('modelJS/nodeMailer');
require('jsController/reserve.js');
require('jsController/reserve.js');

// Create a Nodemailer transporter with iPage SMTP settings
const transporter = nodemailer.createTransport({
    host: 'smtp.ipage.com',
    port: 587, // or 465 for SSL
    secure: false, // Set to true for SSL
    auth: {
        user: 'info@threesixtyshot.com', // Your iPage email address
        pass: 'P@ssW0rd!' // Your email password
    }
});


//Send the reservation information to the 360 Shot email
export function sendReservationTo360Email(reservationData){
    let email = reservationData.email;
    let date = reservationData.date;
    let time = reservationData.time;
    let packageType = reservationData.packageType;
    let fName = reservationData.fName;
    let lName = reservationData.lName;
    let phone = reservationData.phone;
    let specialReq = reservationData.specialRequest;

    // Email options
    const mailOptions = {
        from: email, // Your email address
        to: 'info@threesixtyshot.com', // Recipient email address
        subject: 'New Reservation Made Via Website',
        text: 'A new reservation was made on the 360 Shot Website:' +
            '\n On Date: ' + date +
            '\n Reservation Time: ' + time +
            '\n Package Type: ' + packageType +
            '\n Client First Name: ' + fName +
            '\n Client Last Name: ' + lName +
            '\n Client Phone: ' + phone +
            '\n Client Email' + email +
            '\n Special Request: ' + specialReq
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// Email options
const mailOptions = {
    from: 'info@threesixtyshot.com', // Your email address
    to: 'recipient@example.com', // Recipient email address
    subject: 'Hello from iPage SMTP',
    text: 'This is a test email sent from iPage SMTP.'
};



//Send contact information to 360 Shot email
export function sendContactTo360Email(ContactFormData){
    let email = ContactFormData.email;
    let name = ContactFormData.name;
    let message = ContactFormData.message;

    // Email options
    const mailOptions = {
        from: email, // The client's email address
        to: 'info@threesixtyshot.com', // 360 Shot email address
        subject: 'Contact Made Via Website',
        text: 'Customer Contact on the 360 Shot Website:' +

            '\n Client Name: ' + name +
            '\n Client Email' + email +
            '\n Message: ' + message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}