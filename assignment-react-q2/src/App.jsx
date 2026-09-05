import TextAnalyzer from "./components/TextAnalyzer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Text Analyzer</h1>
        <p className="subtitle">Type text to analyze character and word count</p>
      </header>

      <main className="main-content">
        <TextAnalyzer />
      </main>
    </div>
  );
}

export default App;
