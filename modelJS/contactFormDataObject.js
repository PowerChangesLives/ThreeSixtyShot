// Define the ContactFormDataObject constructor function
function ContactFormDataObject(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
}

// Usage example:
// Create a new ContactFormDataObject instance
const formData = new ContactFormDataObject('John Doe', 'johndoe@example.com', 'Hello, this is a test message.');

// Accessing the attributes of the object
console.log(formData.name); // Output: John Doe
console.log(formData.email); // Output: johndoe@example.com
console.log(formData.message); // Output: Hello, this is a test message.
