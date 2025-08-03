import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [currentActive, setCurrentActive] = useState("/");
  const navigateToHomePage = () => {
    setCurrentActive("/");
    navigate("/");
  };

  const navigateTologinPage = () => {
    setCurrentActive("/login");
    navigate("/login");
  };

  const navigateToRegisterPage = () => {
    setCurrentActive("/register");
    navigate("/register");
  };

  console.log(currentActive, " , ascknasnsancsacn, ", pathname);
  

  return (
    <ul className={`list-of-pages`}>
      <li
        className={"" === "/" ? "header-active" : ""}
        onClick={navigateToHomePage}
      >
        Home
      </li>
      <li
        className={"" === "/login" ? "header-active" : ""}
        onClick={navigateTologinPage}
      >
        Login
      </li>
      <li
        className={"" === "/register" ? "header-active" : ""}
        onClick={navigateToRegisterPage}
      >
        Register
      </li>
    </ul>
  );
};

export default Header;

// using Location (Path Name)

// import React from "react";
// import { useLocation, useNavigate } from "react-router";

// const Header = () => {
//   const { pathname } = useLocation();
//     const navigate = useNavigate();
//   const navigateToHomePage = () => {
//     navigate("/");
//   };

//   const navigateTologinPage = () => {
//     navigate("/login");
//   };

//   console.log(pathname);

//   return (
//     <ul className={`list-of-pages`}>
//       <li className={pathname === '/' ? "header-active": ""} onClick={navigateToHomePage}>Home</li>
//       <li className={pathname === '/login' ? "header-active": "" } onClick={navigateTologinPage}>Login</li>
//       <li className={pathname === '/register' ? "header-active": ""} onClick={()=>navigate("/register")}>Register</li>
//     </ul>
//   );
// };

// export default Header;
