import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import MainPage from "./Main_Page";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    institution: "",
    dateOfBirth: "",
    countryOfBirth: "",
    countryOfInstitution: "",
    skills: "",
    companyPreference: "",
    accountType: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, multiple } = e.target;
    if (multiple) {
      const selectedOptions = Array.from(e.target.selectedOptions).map(
        (option) => option.value
      );
      setFormData((prev) => ({ ...prev, [name]: selectedOptions }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    alert("Signup successful!");
    navigate("/MainPage");
  };

  return (
    <div
      style={{
        maxWidth: 350,
        margin: "0px auto",
        padding: 24,
        border: "1px solid #eee",
        borderRadius: 8,
        boxShadow: "0 2px 8px #f0f1f2",
        backgroundColor: "white",
      }}
    >
      <img
        src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-c534-61f8-a31d-998f3d93a48f/raw?se=2025-05-16T16%3A18%3A13Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=732f244e-db13-47c3-bcc7-7ee02a9397bc&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-16T13%3A18%3A17Z&ske=2025-05-17T13%3A18%3A17Z&sks=b&skv=2024-08-04&sig=U6lw4dxLQG9btpkgJg7uqUajdGMYAWSc4BqY5pXiY8k%3D"
        alt="logo"
        className="Logo"
        style={{
          width: "40%",
          height: "150px",
          margin: "auto",
          display: "block",
        }}
      />
      <h1 style={{ textAlign: "center" }}>Welcome to tenalink</h1>
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          type="text"
          name="institution"
          placeholder="Institution"
          value={formData.institution}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          type="text"
          name="countryOfBirth"
          placeholder="Enter your nationality"
          value={formData.countryOfBirth}
          onChange={handleChange}
          required
          style={{
            padding: 8,
            borderRadius: 4,
            border: "1px solid #ccc",
            width: "100%",
            backgroundColor: "white",
            color: "black",
            marginBottom: "16px",
            height: "40px",
          }}
        />
        <input
          type="text"
          name="countryOfInstitution"
          placeholder="Country of Institution"
          value={formData.countryOfInstitution}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <select
          name="accountType"
          value={formData.accountType}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        >
          <option value="">Select Account Type</option>
          <option value="University/College">University/College</option>
          <option value="User">User</option>
        </select>
        <select
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
          multiple
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        >
          <option value="">Select Skills</option>
          <option value="AI">AI</option>
          <option value="Web Dev">Web Dev</option>
          <option value="Cloud Programming">Cloud Programming</option>
          <option value="Mobile Dev">Mobile Dev</option>
          <option value="Data Science">Data Science</option>
          <option value="DevOps">DevOps</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Blockchain">Blockchain</option>
          <option value="Game Dev">Game Dev</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="companyPreference"
          placeholder="Company Preference"
          value={formData.companyPreference}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{
            padding: 10,
            borderRadius: 4,
            background: "#007bff",
            color: "#fff",
            border: "none",
            fontWeight: "bold",
            onClick: handleSubmit,
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
