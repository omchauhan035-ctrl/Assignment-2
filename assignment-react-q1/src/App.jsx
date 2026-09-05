import StudentCard from "./components/StudentCard";
import "./App.css";

const students = [
  {
    id: 1,
    name: "Tanmay",
    course: "BCA",
    semester: 4,
    email: "tanmaysir@gmail.com",
    phone: "9876543210",
    city: "Surat",
  },
  {
    id: 2,
    name: "Kushal",
    course: "BBA",
    semester: 3,
    email: "kush@gmail.com",
    phone: "9123456780",
    city: "Ahmedabad",
  },
  {
    id: 3,
    name: "Nitin",
    course: "MSc.IT",
    semester: 2,
    email: "nit@gmail.com",
    phone: "9988776655",
    city: "Vadodara",
  },
  {
    id: 4,
    name: "Aman",
    course: "MCA",
    semester: 4,
    email: "amanmm@gmail.com",
    phone: "9001122334",
    city: "Rajkot",
  },
  {
    id: 5,
    name: "Bhavin",
    course: "PHd",
    semester: 5,
    email: "bhav@gmail.com",
    phone: "9876012345",
    city: "Gandhinagar",
  },
  {
    id: 6,
    name: "Navin",
    course: "MCA",
    semester: 4,
    email: "navin@gmail.com",
    phone: "9871234560",
    city: "Surat",
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Student Profile</h1>
      </header>

      <main className="card-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            semester={student.semester}
            email={student.email}
            phone={student.phone}
            city={student.city}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
