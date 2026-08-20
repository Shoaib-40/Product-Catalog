function ProductCard({ product, onViewProduct }) {
  return (
    <div className="card h-100 shadow-sm border-0">

      <img
        src={product.image}
        className="card-img-top product-image"
        alt={product.name}
      />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">

          <h5 className="card-title mb-0">
            {product.name}
          </h5>

          <span className="badge bg-secondary">
            {product.category}
          </span>
        </div>
        <p className="card-text text-muted">
          {product.description}
        </p>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-3">

            <span className="fs-5 fw-bold text-primary">
              ₹{product.price}
            </span>

            <span className="text-warning">
              ⭐ {product.rating}
            </span>

          </div>

          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => onViewProduct(product)}
          >
            View Product
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;