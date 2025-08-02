import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
  
    const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };

  const navigateTologinPage = () => {
    navigate("/login");
  };

  return (
    <ul className="list-of-pages">
      <li onClick={navigateToHomePage}>Home</li>
      <li onClick={navigateTologinPage}>Login</li>
      <li onClick={()=>navigate("/register")}>Register</li>
    </ul>
  );
};

export default Header;
