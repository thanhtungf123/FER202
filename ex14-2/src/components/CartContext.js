import React, { createContext, useState, useEffect } from "react";

// Tạo context cho Cart
export const CartContext = createContext();

// CartProvider cung cấp các giá trị cho các component con
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (dish) => {
    setCartItems((prevItems) => [...prevItems, dish]);
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Hàm xóa tất cả sản phẩm trong giỏ hàng
  const clearCart = () => {
    setCartItems([]);
  };

  // Tổng giá trị giỏ hàng
  const totalValue = cartItems
    .reduce((acc, item) => acc + parseFloat(item.price), 0)
    .toFixed(2);

  // Lưu giỏ hàng vào localStorage để duy trì khi tải lại trang
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, totalValue }}
    >
      {children}
    </CartContext.Provider>
  );
};
