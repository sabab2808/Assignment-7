import { Search, UserCircle } from "lucide-react";
import PropTypes from "prop-types";

const Navbar = ({ searchText, setSearchText }) => {
  return (
    <nav className="navbar">
      {/* Logo */}

      <div className="logo">CRYPT00</div>

      {/* Navigation */}

      <div className="nav-links">
        <a href="#home">Home</a>

        <a href="#recipes">Recipes</a>

        <a href="#about">About</a>

        <a href="#search">Search</a>
      </div>

      {/* Right Side */}

      <div className="nav-right">
        <div className="search-box" id="search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>

        <button className="profile-button" aria-label="User profile">
          <UserCircle size={23} />
        </button>
      </div>
    </nav>
  );
};

// ==============================
// PROPTYPES
// ==============================

Navbar.propTypes = {
  searchText: PropTypes.string.isRequired,

  setSearchText: PropTypes.func.isRequired,
};

export default Navbar;
