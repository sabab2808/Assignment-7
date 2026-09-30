const Banner = () => {
  const scrollToRecipes = () => {
    document.getElementById("recipes")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="banner" id="home">
      <div className="banner-overlay"></div>

      <div className="banner-content">
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

        <div className="banner-buttons">
          <button className="primary-button" onClick={scrollToRecipes}>
            Explore Now
          </button>

          <button
            className="secondary-button"
            onClick={() => alert("Thank you for your feedback!")}
          >
            Our Feedback
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
