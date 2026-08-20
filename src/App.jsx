import { useRef, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductModal from "./components/ProductModal";

import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import NewArrivals from "./components/NewArrivals";
import ContactSection from "./components/ContactSection";

import products from "./Data/products";

import clothes from "./assets/Images/Clothes.png";
import fashion from "./assets/Images/Fashion.png";
import styles from "./assets/Images/Styles.png";
import access from "./assets/Images/Access.png";


function App() {

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [cart, setCart] = useState([]);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const categoriesRef = useRef(null);
  const newArrivalsRef = useRef(null);
  const contactRef = useRef(null);

  const addToCart = (product) => {

    setCart((currentCart) => {

      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );


      if (existingProduct) {

        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      }
      return [
        ...currentCart,

        {
          ...product,
          quantity: 1,
        },
      ];

    });

  };

  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());


    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;


    return matchesSearch && matchesCategory;

  });

  const mainProducts = filteredProducts.filter(
    (product) => product.id <= 8
  );

  const newArrivals = products.filter(
    (product) => product.id > 8
  );

  const categories = [

    {
      title: "Clothes",
      image: clothes,
      description: "Explore clothing",
    },

    {
      title: "Fashion",
      image: fashion,
      description: "Latest fashion",
    },

    {
      title: "Style",
      image: styles,
      description: "Complete your look",
    },

    {
      title: "Accessories",
      image: access,
      description: "Find your accessories",
    },

  ];


  return (

    <>

      <Navbar
        homeRef={homeRef}
        productsRef={productsRef}
        categoriesRef={categoriesRef}
        newArrivalsRef={newArrivalsRef}
        contactRef={contactRef}
      />


      <main>

        <HeroSection
          homeRef={homeRef}
          productsRef={productsRef}
          categoriesRef={categoriesRef}
        />

        <section
          ref={productsRef}
          id="products"
          className="py-5"
        >

          <div className="container">

            <h2 className="text-center mb-4">
              Our Products
            </h2>


            <div className="product-search-wrapper">

              <input
                type="text"
                className="form-control product-search"
                placeholder="🔍 Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>
            <div className="category-filter-wrapper">
              <button
                className={`btn ${
                  selectedCategory === "All"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() =>
                  setSelectedCategory("All")
                }
              >
                All
              </button>
              <button
                className={`btn ${
                  selectedCategory === "Clothes"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() =>
                  setSelectedCategory("Clothes")
                }
              >
                Clothes
              </button>
              <button
                className={`btn ${
                  selectedCategory === "Fashion"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() =>
                  setSelectedCategory("Fashion")
                }
              >
                Fashion
              </button>
              <button
                className={`btn ${
                  selectedCategory === "Style"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() =>
                  setSelectedCategory("Style")
                }
              >
                Style
              </button>
              <button
                className={`btn ${
                  selectedCategory === "Accessories"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() =>
                  setSelectedCategory("Accessories")
                }
              >
                Accessories
              </button>
            </div>
            <ProductList
              products={mainProducts}
              addToCart={addToCart}
              onViewProduct={setSelectedProduct}
            />
          </div>
        </section>

        <CategorySection
          sectionRef={categoriesRef}
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          productsRef={productsRef}
        />

        <NewArrivals
          sectionRef={newArrivalsRef}
          products={newArrivals}
          addToCart={addToCart}
          onViewProduct={setSelectedProduct}
        />

        <ContactSection
          sectionRef={contactRef}
        />

      </main>

      <Cart
        cart={cart}
        setCart={setCart}
      />

      <ProductModal
        product={selectedProduct}
        addToCart={addToCart}
      />
      

    </>

  );
} 
export default App;