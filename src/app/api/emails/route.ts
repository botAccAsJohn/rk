// pages/api/send-email.js
import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";


// Create a transporter for SMTP
const transporter = nodemailer.createTransport({
    host: "gmail.com",
    port: 587,
    secure: true, // upgrade later with STARTTLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export default async function post(req: NextApiRequest, res: NextApiResponse) {

    return res.status(405).json({ message: "Method Not Allowed" });
    
    const { sender, message } = req.body;

    if (!sender || !message) {
        return res.status(400).json({ message: "Missing fields" });
    }
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER, // sender address
            to: "johnbgmi100@gmail.com", // list of receivers
            subject: `${sender} Want to connect you`, // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (err) {
        console.error("Error while sending mail", err);
    }
};

// Parameters

// } {
//     (


//         interface ContactFormRequestBody {
//         name: string;
//         message: string;
//     }

//     interface ApiResponse {
//         success?: boolean;
//         message: string;
//     }

//     export default async function handler(
//         req: NextApiRequest,
//         res: NextApiResponse<ApiResponse>
//     ) {
//         if (req.method !== "POST") {
//             return res.status(405).json({ message: "Method Not Allowed" });
//         }

//         const { name, message } = req.body as ContactFormRequestBody;

//         if (!name || !message) {
//             return res.status(400).json({ message: "Missing fields" });
//         }

//         try {
//             const transporter = nodemailer.createTransport({
//                 service: "gmail",
//                 auth: {
//                     user: process.env.EMAIL_USER,
//                     pass: process.env.EMAIL_PASS,
//                 },
//             });

//             const mailOptions = {
//                 from: `"Website Contact" <${process.env.EMAIL_USER}>`,
//                 to: process.env.EMAIL_TO,
//                 subject: "New Contact Form Submission",
//                 text: `You received a new message:\n\nName: ${name}\nMessage: ${message}`,
//             };

//             await transporter.sendMail(mailOptions);

//             return res.status(200).json({ success: true, message: "Email sent successfully" });
//         } catch (error) {
//             console.error("Error sending email:", error);
//             return res.status(500).json({ success: false, message: "Email sending failed" });
//         }
//     }
