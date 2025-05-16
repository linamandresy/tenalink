import { useState } from "react";
// import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const ClickSignup = () => {
    navigate("/signup");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login with ID and password
    alert(`Logging in with ID: ${id}`);
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google login logic
    alert("Google login not implemented yet.");
  };

  const handleLinkedInLogin = () => {
    // Placeholder for LinkedIn login logic
    alert("LinkedIn login not implemented yet.");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 350,
          padding: 50,
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
          style={{ width: "40%", height: "150px" }}
          align="center"
          justifyContent="center"
          display="flex"
          margin="auto"
          marginBottom="20px"
          marginTop="20px"
          marginLeft="auto"
          marginRight="auto"
        />
        <h1 style={{ textAlign: "center" }}>Welcome to tenalink</h1>
        <h2 style={{ textAlign: "center" }}>Log In</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <input
            type="text"
            placeholder="ID (Email or Username)"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            Log In
          </button>
        </form>
        <div style={{ margin: "24px 0", textAlign: "center", color: "#888" }}>
          or
        </div>
        <button
          onClick={handleGoogleLogin}
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 4,
            background: "#db4437",
            color: "#fff",
            border: "none",
            marginBottom: 8,
            fontWeight: "bold",
          }}
        >
          Continue with Google
        </button>
        <button
          onClick={handleLinkedInLogin}
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 4,
            background: "#0077b5",
            color: "#fff",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Continue with LinkedIn
        </button>
        <h3
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#888",
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Create an account
        </h3>
        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "20px",
            color: "#888",
          }}
        >
          Sign up for a free account to get started.
        </p>
        <button className="SignupButton" onClick={ClickSignup}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
