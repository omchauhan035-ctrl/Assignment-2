import { useState } from "react";

function StudentCard({ name, course, semester, email, phone, city }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="student-card">
      <div className="card-main">
        <p><span className="label">Name:</span> {name}</p>
        <p><span className="label">Course:</span> {course}</p>
        <p><span className="label">Semester:</span> {semester}</p>
      </div>

      <button
        className="toggle-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div className="card-details">
          <p><span className="label">Email:</span> {email}</p>
          <p><span className="label">Phone:</span> {phone}</p>
          <p><span className="label">City:</span> {city}</p>
        </div>
      )}
    </div>
  );
}

export default StudentCard;
