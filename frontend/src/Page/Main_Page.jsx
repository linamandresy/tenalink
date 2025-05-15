import React from "react";

import "../Decoration/Main_Page.css"; // Import the CSS file

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    // if (!localStorage.getItem("token")) {
    //   navigate("/");
    // }
  }, [navigate]);

  return (
    <div className="main-container">
      <h1 className="main-header">Welcome to the Main Page, Mac!</h1>

      <div className="button-group">
        <button className="main-button" onClick={() => alert("Go to Profile")}>
          Profile
        </button>
        <button className="main-button" onClick={() => alert("Go to Settings")}>
          Settings
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default MainPage;
