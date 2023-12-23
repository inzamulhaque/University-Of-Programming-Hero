import nodemailer from "nodemailer";
import config from "../config";

const sendEmail = async (to: string, html: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: config.NODE_ENV === "production",
      auth: {
        user: config.email_address,
        pass: config.email_Password,
      },
    });

    await transporter.sendMail({
      from: config.email_address, // sender address
      to, // list of receivers
      subject: "Reset your password within ten mins!", // Subject line
      text: "", // plain text body
      html, // html body
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
