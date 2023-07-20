const sanitizeHtml = require('sanitize-html');

const cleanInput = input => {

    // Define the allowed HTML tags and attributes
  const allowedTags = [];
  const allowedAttributes = {};

  // Remove HTML tags and JavaScript code
  const cleanedInput = sanitizeHtml(input, {
    allowedTags,
    allowedAttributes,
    disallowedTagsMode: 'discard',
    disallowedAttributesMode: 'discard',
    allowedIframeHostnames: []
  });

  return cleanedInput;

}


const sanitizeEmail = email => {
    const sanitizedEmail = email.replace(/<[^>]*>/g, ''); // Remove HTML tags using regex
    return sanitizedEmail;
  }

const cleanPhoneNumber = phoneNumber => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters using regex
    return cleanedPhoneNumber;
  } 

 const cleanPassword = password => {
    const cleanedPassword = password.replace(/[^A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/g, '');
    return cleanedPassword;
  }

module.exports = {cleanInput,sanitizeEmail,cleanPhoneNumber,cleanPassword};
