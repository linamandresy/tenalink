import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../Decoration/Main_Page.css"; // Make sure CSS matches the layout

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
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
                <button className="nav-button" onClick={() => alert("Go to Settings")}>
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
                        <h1 className="main-header">Yo! Welcome to the TenaLink Main Page</h1>
                        <button className="request-button" onClick={() => alert("Go to Settings")}>
                            NEW REQUEST
                        </button>
                        <button className="request-button" onClick={() => alert("Go to Settings")}>
                            DELETE REQUEST
                        </button>

                    </div>
                </div>
            </div>
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
