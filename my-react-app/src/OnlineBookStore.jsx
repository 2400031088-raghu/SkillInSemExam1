   import React, { useState } from "react";

const OnlineBookstore = () => {
  // ====== JSON Data (Books) ======
  const books = [
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", price: 35, availability: "in stock" },
    { title: "Clean Code", author: "Robert C. Martin", price: 40, availability: "in stock" },
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford", price: 25, availability: "out of stock" },
    { title: "You Don’t Know JS", author: "Kyle Simpson", price: 30, availability: "in stock" },
  ];

  // ====== State (Cart) ======
  const [cart, setCart] = useState([]);

  // ====== Cart Functions ======
  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const getTotal = () => {
    return cart.reduce((t, b) => t + b.price, 0);
  };

  // ====== Render ======
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px", background: "#cfbdbdff", padding: "20px", borderRadius: "10px" }}>
      <h1>📚 Online Bookstore</h1>

      {/* Available Books */}
      <h2>Available Books</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {books.map((book, index) => (
          <div key={index} style={{ border: "1px solid #150f0fff", padding: "10px", background: "#120d0dff", borderRadius: "6px", width: "200px" }}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> ${book.price}</p>
            <p><strong>Availability:</strong> {book.availability}</p>
            <button
              onClick={() => addToCart(book)}
              disabled={book.availability === "out of stock"}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                background: book.availability === "out of stock" ? "#aaa" : "#007BFF",
                color: "white",
                cursor: book.availability === "out of stock" ? "not-allowed" : "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Shopping Cart */}
      <h2>🛒 Shopping Cart</h2>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map((book, index) => (
              <div key={index} style={{ border: "1px solid #1c1717ff", marginBottom: "10px", padding: "10px", background: "#fff", borderRadius: "6px", width: "250px" }}>
                <p>{book.title} - ${book.price}</p>
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total */}
            <h3>Total: ${getTotal()}</h3>

            {/* Checkout */}
            <button
              onClick={() => alert("🛒 Thank you for shopping! (Mock Checkout)")}
              style={{
                marginTop: "15px",
                padding: "10px",
                background: "#28a745",
                color: "#4c1a1aff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default OnlineBookstore;