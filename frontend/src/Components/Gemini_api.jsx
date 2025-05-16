import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "../styles/Gemini_api.css";
import studentData from "../data/students.json";

export const StudentAnalysis = ({ selectedStudent }) => {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Initialize the API with environment variable
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

  const generateStudentSummary = async (student) => {
    const prompt = `Please provide a concise summary of this student's academic profile, and at the end of the summary, talk about if he fit for the job:
    Name: ${student.firstName} ${student.lastName}
    Program: ${student.program}
    Years: ${student.startYear} - ${student.endYear}
    Nationality: ${student.nationality}
    Subjects: ${student.subjects.join(", ")}
    
    Please focus on their academic strengths and potential career paths based on their program and subjects.`;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (err) {
      console.error(`Error generating summary for ${student.firstName}:`, err);
      return `Error generating summary for ${student.firstName} ${student.lastName}`;
    }
  };

  const handleSummary = async () => {
    if (!selectedStudent) return;

    setIsLoading(true);
    setError("");

    try {
      const summary = await generateStudentSummary(selectedStudent);
      setSummary(summary);
    } catch (err) {
      setError("An error occurred while generating summary. Please try again.");
      console.error("Summary Generation Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedStudent) return null;

  return (
    <div className="gemini-container">
      <div className="gemini-header">
        <h3>AI Analysis</h3>
        <button
          onClick={handleSummary}
          disabled={isLoading}
          className="submit-button"
        >
          {isLoading ? "Generating..." : "Generate AI Analysis"}
        </button>
      </div>

      {error && <div className="gemini-error">{error}</div>}

      {summary && (
        <div className="summary-container">
          <p className="summary-text">{summary}</p>
        </div>
      )}
    </div>
  );
};

export default StudentAnalysis;
