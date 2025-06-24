import React from "react";
import SendEmail from "../../../helper/SendVerificationEmail";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { user, msg } = await request.json();
    const resend = new Resend(process.env.RESEND);
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info.rkstudio4k@gmail.com",
      subject: `${user} Wants to Connect With You`,
      react: React.createElement(SendEmail, { user, msg }),
    });

    if (error) {
      return Response.json(
        {
          success: false,
          message: error,
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Register Successfully, Please Verify Your Email",
    });
  } catch (error) {
    console.log("Err in registering User !", error);
    return Response.json(
      {
        success: false,
        message: "Error in Sending the Email !" + error,
      },
      {
        status: 500,
      }
    );
  }
}
