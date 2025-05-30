import nodemailer from 'nodemailer';

const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    throw new Error('Email configuration is missing. Please check your .env file.');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  try {
    const transporter = createTransporter();

    // Test the connection
    await transporter.verify();
    console.log('Email connection verified successfully');

    const emailContent = `
      New Contact Form Submission

      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Project Type: ${data.projectType}

      Message:
      ${data.message}
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${data.name}`,
      text: emailContent,
    };

    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    return { success: true };
  } catch (error) {
    console.error('Detailed email error:', error);
    if (error instanceof Error) {
      return { 
        success: false, 
        error: `Failed to send email: ${error.message}` 
      };
    }
    return { 
      success: false, 
      error: 'Failed to send email: Unknown error' 
    };
  }
} 