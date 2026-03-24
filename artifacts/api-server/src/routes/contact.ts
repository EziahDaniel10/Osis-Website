import { Router } from "express";
import { createTransport } from "nodemailer";
import { logger } from "../lib/logger";

const router = Router();

const TO_EMAIL = "osis@onespiritintegratedservices.com";

router.post("/contact", async (req, res) => {
  const { fullName, email, phone, subject, message } = req.body ?? {};

  if (!fullName || !email || !message) {
    res.status(400).json({ ok: false, error: "Missing required fields." });
    return;
  }

  const body = [
    "You have received a new enquiry from the OSIS website.",
    "",
    `Name:    ${fullName}`,
    `Email:   ${email}`,
    `Phone:   ${phone ?? "—"}`,
    `Subject: ${subject ?? "—"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  logger.info({ fullName, email, subject }, "Contact form submission received");

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"OSIS Website" <${smtpUser}>`,
        replyTo: `${fullName} <${email}>`,
        to: TO_EMAIL,
        subject: `OSIS Website Enquiry: ${subject ?? "General"}`,
        text: body,
      });

      logger.info("Contact email sent successfully");
    } catch (err) {
      logger.error({ err }, "Failed to send contact email");
      res.status(500).json({ ok: false, error: "Email delivery failed." });
      return;
    }
  } else {
    logger.warn("SMTP not configured — contact form submission logged only");
  }

  res.json({ ok: true });
});

export default router;
