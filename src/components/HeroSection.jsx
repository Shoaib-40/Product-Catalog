import home from "../assets/Images/Home.png";

function HeroSection({
  homeRef,
  productsRef,
  categoriesRef,
}) {


  const goToProducts = () => {

    productsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  };


  const goToCategories = () => {

    categoriesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  };


  return (

    <section
      ref={homeRef}
      className="home-section"
    >

      <div
        className="hero-banner"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(10, 10, 10, 0.68) 0%,
              rgba(10, 10, 10, 0.45) 38%,
              rgba(10, 10, 10, 0.12) 75%
            ),
            url(${home})
          `,
        }}
      >

        <div className="hero-banner-content">

          <span className="badge mb-4">
            Latest Collection
          </span>


          <h1 className="hero-title mb-4">
            YOUR STYLE.
            <br />
            YOUR CHOICE.
          </h1>


          <p className="hero-subtext lead mb-4">

            Discover fashion, footwear and accessories
            designed for your everyday style.
          </p>
          <div className="d-flex flex-wrap gap-3">

            <button
              className="btn btn-light"
              onClick={goToProducts}
            >
              🛍️ Shop Collection
            </button>


            <button
              className="hero-btn-outline"
              onClick={goToCategories}
            >
              View Categories
            </button>

          </div>
        </div>
      </div>
    </section>
  );

}
export default HeroSection;