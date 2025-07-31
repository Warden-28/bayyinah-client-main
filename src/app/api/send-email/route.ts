import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

 const mailOptions = {
  from: `"Trial Form" <${process.env.EMAIL_USER}>`,
  to: "sabarish.blackstone@gmail.com",
  subject: "New Trial Class Submission",
  html: `
    <h2 style="font-family: Arial, sans-serif;">Trial Class Request</h2>
    <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
      <tr><th align="left">First Name</th><td>${data.firstName}</td></tr>
      <tr><th align="left">Last Name</th><td>${data.lastName}</td></tr>
      <tr><th align="left">Email</th><td>${data.email}</td></tr>
      <tr><th align="left">Phone</th><td>${data.phone}</td></tr>
      <tr><th align="left">Country</th><td>${data.country}</td></tr>
      <tr><th align="left">Learning Interest</th><td>${data.learningInterest}</td></tr>
      <tr><th align="left">Student Count</th><td>${data.studentCount}</td></tr>
      <tr><th align="left">Preferred Teacher</th><td>${data.preferredTeacher}</td></tr>
      <tr><th align="left">Referral Source</th><td>${data.referralSource}</td></tr>
      <tr><th align="left">Preferred Date</th><td>${data.preferredDate}</td></tr>
      <tr><th align="left">Preferred Time</th><td>${data.preferredTime}</td></tr>
    </table>
  `,
};

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false, error: "Email failed to send" }, { status: 500 });
  }
}
