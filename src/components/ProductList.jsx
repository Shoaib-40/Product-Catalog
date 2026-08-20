import ProductCard from "./ProductCard";

function ProductList({ products, addToCart, onViewProduct }) {

  if (products.length === 0) {
    return (
      <div className="text-center py-5">
        <h4>No products Found</h4>

        <p className="text-muted">
          Try another search or category
        </p>
      </div>
    );
  }

  return (
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
  );
}

export default ProductList;