import { Search, CircleUserRound } from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo" >
          CRYPTOO
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/recipes">Recipes</a>
          <a href="/about">About</a>
          <a href="/search">Search</a>
        </div>

        <div className="nav-right">

          <div className="search-box">
            <Search size={19} />
            <span>Search</span>
          </div>

          <button className="profile-btn">
            <CircleUserRound size={23} />
          </button>

        </div>

      </nav>


      {/* Hero Section */}
      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1>
            Discover delicious recipes
            <br />
            made just for you!
          </h1>

          <p>
            Explore delicious recipes, discover their ingredients,
            <br />
            preparation time and calories to make healthier choices.
          </p>

          <div className="hero-buttons">
            <button className="explore-btn">
              Explore Now
            </button>

            <button className="feedback-btn">
              Our Recipes
            </button>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;