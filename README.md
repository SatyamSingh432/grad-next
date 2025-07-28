# GradNext Frontend

This is the frontend of the **GradNext** platform, built using **React** and **Vanilla CSS**. It includes responsive components like a navbar, forms, and program information tailored for desktop, tablet, and mobile views.

---

## Tech Stack

- React (with React Router)
- Vanilla CSS (custom breakpoints for responsiveness)
- React Router for navigation
- Swiper library for sliders

---

## Project Structure

```bash
src/
├── assets/ # Images and icons
├── components/ #  components (Navbar, HeroSec, Forms, etc.)
├── styles/ # components CSS
├── App.jsx # Main component
└── main.jsx # Entry point
```

---

## Responsive layouts are handled using `@media` queries inside `styles/*.css`.

- Website is responsive for Mobiles, Tablets and Laptop/PC

---

## Installation

```bash
# 1. Clone the repo
git clone https://github.com/SatyamSingh432/grad-next.git
cd grad-next

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

```

Features

- Responsive Navbar with hover underline and dropdown

- Cohort Form: Takes Name, Email, and Mobile Number with basic validation

- React Router for page navigation
