import React, { useState } from "react";
import studentData from "../data/students.json";
import StudentAnalysis from "./Gemini_api";

const NewRequest = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nationality: "",
    startYear: "",
    endYear: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = studentData.students.find(
      (student) =>
        student.firstName.toLowerCase() === formData.firstName.toLowerCase() &&
        student.lastName.toLowerCase() === formData.lastName.toLowerCase() &&
        student.email.toLowerCase() === formData.email.toLowerCase() &&
        student.nationality.toLowerCase() ===
          formData.nationality.toLowerCase() &&
        student.startYear.toString() === formData.startYear &&
        student.endYear.toString() === formData.endYear
    );
    setSelectedStudent(student || null);
  };

  return (
    <div className="new-request-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="number"
            name="startYear"
            placeholder="Start Year"
            value={formData.startYear}
            onChange={handleChange}
            required
            min="2000"
            max="2024"
          />
          <input
            type="number"
            name="endYear"
            placeholder="End Year"
            value={formData.endYear}
            onChange={handleChange}
            required
            min="2000"
            max="2028"
          />
        </div>
        <button type="submit">Search Student</button>
      </form>

      {selectedStudent && (
        <div className="student-profile">
          <div className="student-info">
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
              alt="Student"
              style={{ width: "100px", height: "100px" }}
            />
            <h2>
              {selectedStudent.firstName} {selectedStudent.lastName}
            </h2>
            <p>
              <strong>Program:</strong> {selectedStudent.program}
            </p>
            <p>
              <strong>Years:</strong> {selectedStudent.startYear} -{" "}
              {selectedStudent.endYear}
            </p>
            <p>
              <strong>Nationality:</strong> {selectedStudent.nationality}
            </p>
            <p>
              <strong>Email:</strong> {selectedStudent.email}
            </p>
            <div className="subjects">
              <h3>Subjects:</h3>
              <ul>
                {selectedStudent.subjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </div>
          </div>
          <StudentAnalysis selectedStudent={selectedStudent} />
        </div>
      )}
    </div>
  );
};

export default NewRequest;
