import { saveUsers, users } from "../db/db.js";

const trackEmailOpen = (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  console.log(user);
  if (user) {
    user.opened = true;
    saveUsers();
  }
  res.json({});
};

const trackPaymentClick = (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (user) {
    user.clicked = true;
    user.clicked_at = new Date().toISOString();
    saveUsers();
  }
  res.redirect("https://dummy.payment/confirm");
};

export { trackEmailOpen, trackPaymentClick };
