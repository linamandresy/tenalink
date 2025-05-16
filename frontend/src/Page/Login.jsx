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
        maxWidth: 350,
        margin: "60px auto",
        padding: 24,
        border: "1px solid #eee",
        borderRadius: 8,
        boxShadow: "0 2px 8px #f0f1f2",
        backgroundColor: "white",
      }}
    >
      <img
        src="https://www.pngfind.com/pngs/m/665-6659827_enterprise-comments-default-company-logo-png-transparent-png.png"
        alt="logo"
        className="Logo"
        style={{ width: "50%", height: "150px" }}
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
      <h3>Create an account</h3>
      <p>Sign up for a free account to get started.</p>
      <button className="SignupButton" onClick={ClickSignup}>
        Sign up
      </button>
    </div>
  );
};

export default Login;
