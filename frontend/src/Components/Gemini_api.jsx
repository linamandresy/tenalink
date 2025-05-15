import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "../styles/Gemini_api.css";

const GeminiComponent = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Replace with your actual API key

  const apiKey = "AIzaSyAEZsM-vPqqwvpgidqBCvhHUJYRsh2dpXE";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const genai = new GoogleGenerativeAI(apiKey);
    const model = genai.getGenerativeModel({ model: "gemini-2.0-flash" });

    try {
      const result = await model.generateContent(userInput);
      setResponse(result.response.text);
    } catch (error) {
      console.error("Error generating content:", error);
      setResponse("Error: Could not generate content.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="chatbot-title">ChatBot</h1>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your prompt"
          className="input-field"
        />
        <button type="submit" disabled={isLoading} className="submit-button">
          {isLoading ? "Generating..." : "Get Response"}
        </button>
      </form>
      {response && (
        <div className="response-container">
          <h3 className="response-title">Response:</h3>
          <p className="response-text">{response}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiComponent;
