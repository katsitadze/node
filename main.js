const validator = require('validator');

const emails = ['test@test.com', 'abcDE123'];

emails.forEach(email => {
    const isValid = validator.isEmail(email);
    console.log(`${email} is ${isValid ? 'a valid email' : 'not a valid email'}`);
});
 