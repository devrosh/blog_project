import React from "react";
import { FaSearch } from "react-icons/fa";

import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");
  const handleSignout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <header className="header">
      <div className="logo">
        <Link className="home_link" to="/">
          Rastr
        </Link>
      </div>
      <div className="search">
        <FaSearch className="search_icon" />
        <input type="text" placeholder="Search post..." />
      </div>
      {isLoggedIn ? (
        <div className="create_post">
          <Link className="navlinks" to="/account">
            My Profile
          </Link>
          <Link className="navlinks" to="/create">
            Create Post
          </Link>
          <li>
            <button onClick={handleSignout}>SignOut</button>
          </li>
        </div>
      ) : (
        <div className="links">
          <div>
            <Link className="home_link" to="/login">
              Login
            </Link>
          </div>
          <div>
            <Link className="home_link" to="/register">
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
