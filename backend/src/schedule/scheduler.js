import { EMAIL_TYPE } from "../emails/emailService.js";

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const TWO_DAY_MS = 2 * ONE_DAY_MS;
const ONE_HOUR_MS = 1000 * 60 * 60;
const ONE_MIN_MS = 1000 * 60;

export function runScheduler(users, sendEmail, saveUsers) {
  setInterval(() => {
    const now = Date.now();
    users.forEach((user) => {
      // If paid or replied: Stop all follow-ups
      if (user.paid || user.replied) return;

      const submittedTime = new Date(user.submitted_at).getTime();
      const clickedTime = user.clicked_at
        ? new Date(user.clicked_at).getTime()
        : null;
      const emailOpened = user.opened;
      const lastEmailType = user.last_email_sent;
      const linkClicked = user.clicked;
      const userPaid = user.paid;

      // Case 1 - If unread: Send a reminder email after 2 days
      if (
        !emailOpened &&
        now - submittedTime >= TWO_DAY_MS &&
        lastEmailType === EMAIL_TYPE.SELECTION
      ) {
        sendEmail(user, EMAIL_TYPE.REMINDER_ONE);
      } else if (
        // Case 2 - If read but not clicked: Send a follow-up with more benefits of the program
        emailOpened &&
        !linkClicked &&
        lastEmailType !== EMAIL_TYPE.REMINDER_TWO
      ) {
        sendEmail(user, EMAIL_TYPE.REMINDER_TWO);
      } else if (
        // Case 3 - If clicked but not paid: Send a final reminder
        linkClicked &&
        !userPaid &&
        now - clickedTime >= TWO_DAY_MS &&
        lastEmailType !== EMAIL_TYPE.FINAL
      ) {
        sendEmail(user, EMAIL_TYPE.FINAL);
      }
    });

    saveUsers();
  }, ONE_HOUR_MS);
}
