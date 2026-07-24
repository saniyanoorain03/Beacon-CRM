import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Beacon</h2>
      </div>

      <div className="nav-links">


        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;