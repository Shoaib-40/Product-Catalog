import "../Styles/Navbar.css";

function Navbar({
  homeRef,
  productsRef,
  categoriesRef,
  newArrivalsRef,
  contactRef,
}) {

  const goToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>


      <nav className="navbar navbar-dark bg-dark product-navbar">

        <div className="container-fluid">

          <button
            className="navbar-brand fw-bold border-0 bg-transparent text-white"
            onClick={() => goToSection(homeRef)}
          >
            🛍️ Maison Style
          </button>

          <button
            className="btn btn-outline-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#cartSidebar"
            aria-controls="cartSidebar"
          >
            🛒 Cart
          </button>
        </div>
      </nav>
      <div className="sidebar">
        <div className="sidebar-title">
          🛍️ PRODUCT CATALOG
        </div>
        <button
          className="sidebar-link active"
          onClick={() => goToSection(homeRef)}
        >
          🏠 Home
        </button>

        <button
          className="sidebar-link"
          onClick={() => goToSection(productsRef)}
        >
          🛍️ Products
        </button>

        <button
          className="sidebar-link"
          onClick={() => goToSection(categoriesRef)}
        >
          🗂️ Categories
        </button>

        <button
          className="sidebar-link"
          onClick={() => goToSection(newArrivalsRef)}
        >
          🆕 New Arrivals
        </button>

        <button
          className="sidebar-link"
          onClick={() => goToSection(contactRef)}
        >
          📞 Contact
        </button>

      </div>

    </>
  );
}
export default Navbar;