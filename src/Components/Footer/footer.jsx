import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const currentTime = new Date().toLocaleTimeString();
  const userName = localStorage.getItem("userName") || "Guest";
  const userColor = localStorage.getItem("userColor") || "#333";

  return (
    <footer
      className="footer"
      style={{ backgroundColor: userColor, padding: "20px", textAlign: "center", color: "#fff" }}
    >
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} {userName}
        </p>
        <p>Current Time: {currentTime}</p>
      </div>
    </footer>
  );
};

export default Footer;