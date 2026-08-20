function Cart({ cart, setCart }) {

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="cartSidebar"
      aria-labelledby="cartSidebarLabel"
    >
      <div className="offcanvas-header border-bottom">
        <h5
          className="offcanvas-title fw-bold"
          id="cartSidebarLabel"
        >
          🛒 Your Cart
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>

      </div>
      <div className="offcanvas-body">
        {cart.length === 0 ? (
          <div className="text-center mt-5">

            <h5>Your cart is empty</h5>

            <p className="text-muted">
              Add some products to your cart.
            </p>

          </div>

        ) : (

          <>

            {cart.map((item) => (

              <div
                key={item.id}
                className="border-bottom pb-3 mb-3"
              >

                <div className="d-flex gap-3">

                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                    className="rounded"
                  />

                  <div className="flex-grow-1">

                    <h6 className="mb-1">
                      {item.name}
                    </h6>

                    <p className="text-primary fw-bold mb-2">
                      ₹{item.price}
                    </p>

                    <div className="d-flex align-items-center gap-2">

                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger ms-auto"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            ))}
            <div className="border-top pt-3">

              <div className="d-flex justify-content-between mb-3">

                <strong>
                  Total
                </strong>

                <strong className="text-primary">
                  ₹{total}
                </strong>

              </div>

              <button className="btn btn-dark w-100">
                Total Price
              </button>
            </div>

          </>
        )}
      </div>
    </div>
  );
}
export default Cart;