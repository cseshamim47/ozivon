// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    // Only allow POST requests
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Extract email data from the request body
  const { to, dynamicTemplateData } = req.body;

  if (!to) {
    return res
      .status(400)
      .json({ message: "Recipient email 'to' is required" });
  }

  const msg = {
    to,
    from: {
      email: "contact@ozivon.com",
      name: "Ozivon",
    },
    templateId: "d-8124aa3189b1402a914b37d55cab0594", // Replace with your SendGrid template ID
    dynamicTemplateData,
  };

  try {
    // Send the email
    const response = await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully", response });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
}
