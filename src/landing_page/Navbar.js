import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)isLoggedIn=([^;]*)/);
    setIsLoggedIn(!!(match && match[1]));
  }, [location]);

  const handleLogout = () => {
    document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:'white'}}>
        <div class="container p-2">
         <Link class="navbar-brand" to="/">
            <img src='media/images/logo.svg' alt='logo' style={{width:'25%'}}/>
            </Link> 
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" to="/about">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/product">Product</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/pricing">Pricing</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/support">Support</Link>
                </li>
                {!isLoggedIn && (
                  <li class="nav-item">
                    <Link class="nav-link active" to="/login">Login</Link>
                  </li>
                )}
                {isLoggedIn && (
                  <li class="nav-item">
                    <a class="nav-link active" href={process.env.NODE_ENV === "production" ? "https://zerodha-clone-dashboard-312i.onrender.com" : "http://localhost:3001"}>Dashboard</a>
                  </li>
                )}
                {isLoggedIn && (
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      style={{ background: "none", border: "none", font: "inherit", cursor: "pointer" }}
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </form>
          </div>
        </div>
      </nav>
   
  );
}

export default Navbar;
