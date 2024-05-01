

//Note: I got the settings info from: https://www.ipage.com/help/article/email-client-setup

const nodemailer = require('modelJS/nodeMailer');

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

// Email options
const mailOptions = {
    from: 'info@threesixtyshot.com', // Your email address
    to: 'recipient@example.com', // Recipient email address
    subject: 'Hello from iPage SMTP',
    text: 'This is a test email sent from iPage SMTP.'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});