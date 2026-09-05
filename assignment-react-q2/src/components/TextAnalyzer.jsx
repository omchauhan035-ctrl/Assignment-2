import { useState, useEffect } from "react";
import TextStats from "./TextStats";

function TextAnalyzer() {
  const [text, setText] = useState("");

  const charCount = text.length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  useEffect(() => {
    document.title = `Characters: ${charCount} | Text Analyzer`;
  }, [charCount]);

  return (
    <div className="analyzer-wrapper">
      <h2 className="analyzer-title">Text Analyzer</h2>

      <textarea
        className="text-input"
        placeholder="Start typing your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
      />

      <div className="preview-box">
        <h3 className="preview-label">Entered Text:</h3>
        <p className="preview-text">{text || <em>Nothing typed yet...</em>}</p>
      </div>

      <TextStats charCount={charCount} wordCount={wordCount} />
    </div>
  );
}

export default TextAnalyzer;
