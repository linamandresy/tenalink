import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../Decoration/Main_Page.css";
import newRequest from "../Components/newRequest"; // Make sure CSS matches the layout

import React from "react";
import "../styles/Login.css";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>
        Tenalink
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          GitHub
        </a>
      </div>
    </header>
  );
};

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const handleNewRequest = () => {
    navigate("/newRequest");
  };

  const handleDeleteRequest = () => {
    navigate("/deleteRequest");
  };

  useEffect(() => {
    // Add auth logic here if needed
  }, [navigate]);

  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="navbar-logo">TENA LINK</div>
        <div className="navbar-links">
          <button className="nav-button" onClick={() => alert("Go to Profile")}>
            Profile
          </button>
          <button
            className="nav-button"
            onClick={() => alert("Go to Settings")}
          >
            Settings
          </button>
          <button className="nav-button logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className="row1">
        <div className="column1">
          <div className="row1">
            <div className="main-content">
              <h1 className="main-header">
                Yo! Welcome to the TenaLink Main Page
              </h1>
              <button className="request-button" onClick={handleNewRequest}>
                NEW REQUEST
              </button>
              <button className="request-button" onClick={handleDeleteRequest}>
                DELETE REQUEST
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <Header />
      </div>
      {/**  
        <div className="main-content">
            <div className="row1">
                    <div className="column1">
                        <button className="request-button" onClick={() => alert("Go to Settings")}>
                            NEW REQUEST
                        </button>
                    </div>
                    <div className="column1">
                        <button className="request-button" onClick={() => alert("Go to Settings")}>
                            DELETE REQUEST
                        </button>
                    </div>
            </div>
        </div>
        */}
    </div>
  );
};

export default MainPage;
