import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div
      style={{
        maxWidth: 350,
        margin: "60px auto",
        padding: 24,
        border: "1px solid #eee",
        borderRadius: 8,
        boxShadow: "0 2px 8px #f0f1f2",
      }}
    >
      <img
        src="https://www.pngfind.com/pngs/m/665-6659827_enterprise-comments-default-company-logo-png-transparent-png.png"
        alt="logo"
        className="Logo"
        style={{
          width: "50%",
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
          placeholder="Country of Birth"
          value={formData.countryOfBirth}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
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
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        >
          <option value="">Select Skills</option>
          <option value="AI">AI</option>
          <option value="Web Dev">Web Dev</option>
          <option value="Cloud Programming">Cloud Programming</option>
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
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
