import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";

function ProductModal({ product, addToCart }) {
  const modalRef = useRef(null);
  const modalInstanceRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) return;

    modalInstanceRef.current = new Modal(modalRef.current);

    return () => {
      modalInstanceRef.current?.dispose();
    };
  }, []);

  useEffect(() => {
    if (product) {
      modalInstanceRef.current?.show();
    }
  }, [product]);

  return (
    <div
      ref={modalRef}
      className="modal fade"
      id="productModal"
      tabIndex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title" id="productModalLabel">
              {product?.name}
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body text-center">

            <div className="d-flex gap-2 mb-3">

              <img
                src={product?.image}
                alt={product?.name}
                className="img-fluid rounded"
                style={{
                  height: "250px",
                  width: product?.image2 ? "50%" : "100%",
                  objectFit: "cover",
                }}
              />

              {product?.image2 && (
                <img
                  src={product.image2}
                  alt={`${product?.name} alternate view`}
                  className="img-fluid rounded"
                  style={{
                    height: "250px",
                    width: "50%",
                    objectFit: "cover",
                  }}
                />
              )}

            </div>

            <h4>{product?.name}</h4>

            <span className="badge bg-secondary mb-3">
              {product?.category}
            </span>

            <p className="text-muted">
              {product?.description}
            </p>

            <div className="d-flex justify-content-between px-3">

              <span className="fs-5 fw-bold text-primary">
                ₹{product?.price}
              </span>

              <span className="text-warning">
                ⭐ {product?.rating}
              </span>

            </div>

          </div>

          <div className="modal-footer">

            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addToCart(product)}
              data-bs-dismiss="modal"
            >
              Add to Cart
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductModal;