# GradNext Cohort Enrollment Automation

A full-stack automation workflow that collects cohort interest via a form and sends behavior-based follow-up emails using Brevo. Frontend of the **GradNext** platform, built using **React** and **Vanilla CSS**. It includes responsive components like a navbar, forms, and program information tailored for desktop, tablet, and mobile views. Backend is built using Express.js with JSON as db.

---

## Tech Stack

- **Frontend**: React (Vite), Vanilla CSS, React Router, Swiper for sliders
- **Backend**: Node.js + Express.js (ES6 Modules)
- **Email Service**: [Brevo](https://brevo.com)
- **Database**: Local JSON (can be swapped for MongoDB)
- **Scheduler**: In-memory interval-based task
- **Tracking**: Email open (pixel), link click

---

## Project Structure

```bash
src/
├── assets/ # Images and icons
├── components/ #  components (Navbar, HeroSec, Forms, etc.)
├── styles/ # components CSS
├── App.jsx # Main component
└── main.jsx # Entry point

backend/src/                # Express API
├── config/         # Configuration files
│   └── nodemailer.js         # Mail transporter setup
│
├── controllers/    # Controller logic for route handling
│   ├── emailTracking.controller.js
│   └── user.controller.js
│
├── db/             # Database and mock data
│   ├── db.js                   # DB connection / in-memory logic
│   └── users.json              # Sample/mock user data
│
├── emails/         # Email services and templates
│   ├── templates/              # Predefined email HTML templates
│   └── emailService.js        # Logic to send emails
│
├── routes/         # API route definitions
│   ├── emailTracking.routes.js
│   └── user.routes.js
│
├── schedule/       # Job scheduling logic (e.g., reminders)
│   └── scheduler.js
│
└── index.js        # App entry point (Express server)
```

---

## Setup Instructions

- Requires Node v22+

### 1. Clone the Repo

```bash
git clone https://github.com/SatyamSingh432/grad-next.git
cd grad-next
```

### 2. Frontend Setup (React + Vite)

```bash
npm install
npm run dev
```

### 3. Backend Setup (Express)

Add env secrets based on example file.

```env
PORT=8080
BASE_URL=https://grad-next.onrender.com # API URL

SMTP_USER=<SMTP_USER>
SMTP_PASS=<SMTP_PASS>
SMTP_HOST=<SMTP_HOST>
SENDER_EMAIL=<SENDER_EMAIL>
```

Install dependencies and start server.

```bash
cd backend
npm install
node index.js
```

---

## Features

- Responsive Navbar with hover underline and dropdown
- Cohort Form: Takes Name, Email, and Mobile Number with basic validation
- React Router for page navigation
- Automated personalized email sending
- Real-time behavior tracking
- Scheduler-based reminders
- Easily swappable to real DB or SMTP

---

## Email Workflow Logic

Once a user submits the form:

1. ✅ They receive a selection email with a payment link.
2. 🕵️ The system tracks:

   - Email open (via tracking pixel)
   - Link click

3. ⏳ Follow-up sequence (automated via `setInterval`):
   - **Unread after 2 days** → `Reminder 1`
   - **Read but not clicked** → `Reminder 2`
   - **Clicked but not paid after 2 days** → `Final Reminder`
   - **Replied or Paid** → ✅ Stop follow-ups

---

## Testing

### Simulate Email Tracking

- Open tracking: hit `http://localhost:8080//api/log/open/:id`
- Click tracking: hit `http://localhost:8080/api/log/click/:id`

---

## Future Enhancements

- Replace JSON with MongoDB or PostgreSQL
- Admin dashboard to monitor user journey
- Simulate Payment Webhook
- Secure webhook handling & logs

---

## Live Demo

- Landing Page + Form: https://grandnext-satyam.netlify.app/
- API: https://grad-next.onrender.com/

Note:- Since API is deployed on Render Free Plan, it takes 1 minute to start the server.

## Author

Built by Satyam Singh for **GradNext**
