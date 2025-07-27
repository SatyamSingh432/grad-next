import { EMAIL_TYPE, sendEmail } from "../emails/emailService.js";
import { saveUsers, users } from "../db/db.js";

const submitUser = (req, res) => {
  const { name, email, phone } = req.body;
  const user = {
    id: Date.now().toString(),
    name,
    email,
    phone,
    opened: false,
    clicked: false,
    paid: false,
    replied: false,
    last_email_sent: EMAIL_TYPE.SELECTION,
    submitted_at: new Date().toISOString(),
  };
  users.push(user);
  saveUsers();
  sendEmail(user, EMAIL_TYPE.SELECTION);
  return res.json({ message: "Form submitted and selection email sent." });
};

export { submitUser };
