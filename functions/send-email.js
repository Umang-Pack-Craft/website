// const sgMail = require('@sendgrid/mail');

// exports.handler = async (event, context) => {
//   if (event.httpMethod !== 'POST') {
//     return { statusCode: 405, body: 'Method Not Allowed' };
//   }

//   const { name, email, phone, message } = JSON.parse(event.body);

//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//   const msg = {
//     to: 'destination-email@example.com', // Replace with your email
//     from: process.env.SENDGRID_VERIFIED_SENDER, // Must be verified in SendGrid
//     subject: 'New Contact Form Submission',
//     text: `
//       Name: ${name}
//       Email: ${email}
//       Phone: ${phone}
//       Message: ${message}
//     `,
//   };

//   try {
//     await sgMail.send(msg);
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Email sent successfully' })
//     };
//   } catch (error) {
//     console.error('Error sending email:', error);
//     if (error.response) {
//       console.error(error.response.body)
//     }
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Error sending email' })
//     };
//   }
// };