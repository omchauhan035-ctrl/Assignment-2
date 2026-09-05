function TextStats({ charCount, wordCount }) {
  return (
    <div className="stats-box">
      <div className="stat-item">
        <span className="stat-number">{charCount}</span>
        <span className="stat-label">Characters</span>
      </div>
      <div className="stat-divider" />
      <div className="stat-item">
        <span className="stat-number">{wordCount}</span>
        <span className="stat-label">Words</span>
      </div>
    </div>
  );
}

export default TextStats;
