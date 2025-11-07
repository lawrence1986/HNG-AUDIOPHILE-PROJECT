import nodemailer from "nodemailer";

async function testEmail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "madusquare@gmail.com",
      pass: "pdazogcrnmbvbzug"
    },
  });

  const info = await transporter.sendMail({
    from: '"Audiophile Test" <madusquare@gmail.com>',
    to: "madusquare@gmail.com", // or any test inbox
    subject: "Test Email",
    text: "If you received this, your SMTP works!",
  });

  console.log("Message sent: %s", info.messageId);
}

testEmail().catch(console.error);
