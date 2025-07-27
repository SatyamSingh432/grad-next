import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import { saveUsers } from "../db/db.js";
import { transporter } from "../config/nodemailer.js";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const BASE_URL = process.env.BASE_URL;

const EMAIL_TYPE = {
  SELECTION: "selection",
  REMINDER_ONE: "reminder1",
  REMINDER_TWO: "reminder2",
  FINAL: "final",
};

async function sendEmail(user, type) {
  const filePath = path.join(__dirname, "templates", `${type}.html`);
  let template = fs.readFileSync(filePath, "utf-8");

  template = template
    .replace(/{{name}}/g, user.name)
    .replace(/{{id}}/g, user.id)
    .replace(/{{BASE_URL}}/g, BASE_URL);

  const mailOption = {
    from: process.env.SENDER_EMAIL,
    to: user.email,
    subject: "GradNext | Cohort Mail",
    html: template,
  };

  try {
    await transporter.sendMail(mailOption);
  } catch (error) {
    console.log("ERRR", error);
  }
  console.log(`Sending "${type}" email to ${user.email}`);
  console.log(template);

  user.last_email_sent = type;
  saveUsers();
}

export { sendEmail, EMAIL_TYPE };
