import ProductCard from "./ProductCard";


function NewArrivals({
  sectionRef,
  products,
  addToCart,
  onViewProduct,
}) {


  return (

    <section
      ref={sectionRef}
      id="new-arrivals"
      className="py-5"
    >

      <div className="container">
        <h2 className="text-center mb-2">
          ✨ New Arrivals
        </h2>
        <p className="text-center text-muted mb-4">
          Check out our latest products.
        </p>
        <div className="row g-4">

          {products.map((product) => (

            <div
              className="col-12 col-sm-6 col-lg-3"
              key={product.id}
            >

              <ProductCard
                product={product}
                addToCart={addToCart}
                onViewProduct={onViewProduct}
              />

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}
export default NewArrivals;