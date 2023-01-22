import { Link } from "react-router-dom";
import "./Navbar.css";
const ResponsiveAppBar = () => {
  return (
    <nav>
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
    </ul>
    <ul className="nav-right">
      <li>
        <a href="#login">Login</a>
      </li>
      <li>
        <a href="#register">Register</a>
      </li>
    </ul>
  </nav>
  );
};

export default ResponsiveAppBar;
