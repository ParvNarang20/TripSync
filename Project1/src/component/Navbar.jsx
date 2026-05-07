import { Link } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/hotels", label: "Hotels" },
  { path: "/flights", label: "Flights" },
  { path: "/cabs", label: "Cabs" },
  { path: "/about", label: "About" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="brand" to="/">
        TripSync
      </Link>

      <div className="nav-links">
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        ))}
      </div>

      <div className="nav-actions">
        <Link className="ghost-button" to="/login">
          Login
        </Link>
        <Link className="primary-button small" to="/signup">
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
