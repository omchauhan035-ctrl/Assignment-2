# Assignment 02 – Q1: Student Profile Card

## What We Built

A React application that displays student profile cards in a 2-column grid layout. Each card shows basic student information and has a toggle button to show or hide additional details.

## What We Used

- **React** – JavaScript library for building the UI
- **Vite** – Fast build tool and development server
- **useState** – React hook to control show/hide state of extra details
- **Props** – To pass student data (name, course, semester, email, phone, city) into the `StudentCard` component
- **CSS** – Custom styles for dark theme, grid layout, and card animations

## Folder Structure

```
assignment-react-q1/
├── src/
│   ├── components/
│   │   └── StudentCard.jsx   ← Reusable student card component
│   ├── App.jsx               ← Main app with student data array
│   ├── App.css               ← Styles for layout and cards
│   └── index.css             ← Global reset styles
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

## Features

- 6 student cards displayed in a 2-column responsive grid
- Each card shows: Name, Course, Semester
- "Show Details" / "Hide Details" toggle button on each card
- When expanded, shows: Email, Phone, City
- Smooth fade-in animation when details appear
- Dark theme matching the reference design

## How to Run

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.
