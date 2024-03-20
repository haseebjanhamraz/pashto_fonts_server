const nodemailer = require("nodemailer");

exports.submitForm = async (req, res) => {
  const { name, email, _subject, message } = req.body;

  // Create a nodemailer transporter using IMAP settings
  const transporter = nodemailer.createTransport({
    host: "imap.ionos.com", // Provide the IMAP host
    port: 587, // Provide the IMAP port (usually 587 for TLS)
    secure: true, // Set to true if the IMAP server requires a secure connection (SSL/TLS)
    auth: {
      user: "info@bksparky.com", // Provide your email address
      pass: "H@$eeB#65", // Provide your email password
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "haseebjanhamraz@gmail.com", // Change this to your email
    subject: _subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
