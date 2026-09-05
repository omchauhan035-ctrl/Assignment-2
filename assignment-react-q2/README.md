# Assignment 02 – Q2: Text Analyzer

## What We Built

A React application that analyzes text entered by the user in real time. It counts characters and words, displays the entered text below the textarea, and updates the browser tab title whenever the character count changes.

## What We Used

- **React** – JavaScript library for building the UI
- **Vite** – Fast build tool and development server
- **useState** – To store the text entered by the user
- **useEffect** – To update the document/tab title when character count changes
- **Props** – To pass `charCount` and `wordCount` from `TextAnalyzer` to the `TextStats` component
- **CSS** – Custom styles with a dark purple gradient theme

## Folder Structure

```
assignment-react-q2/
├── src/
│   ├── components/
│   │   ├── TextAnalyzer.jsx  ← Main analyzer component (useState + useEffect)
│   │   └── TextStats.jsx     ← Stats display component (receives props)
│   ├── App.jsx               ← Root app component
│   ├── App.css               ← Styles for analyzer UI
│   └── index.css             ← Global reset styles
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

## Features

- Textarea for user to type or paste text
- Live preview of entered text displayed below the textarea
- Real-time character count and word count
- `TextStats` component receives counts via props and displays them
- Browser tab title updates automatically as character count changes (useEffect)
- Dark purple gradient theme

## How to Run

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.
