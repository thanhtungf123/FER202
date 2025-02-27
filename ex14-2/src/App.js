import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { CartProvider } from "./components/CartContext";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";
import Checkout from "./components/Checkout";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';


// Danh sách món ăn mẫu
const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: "images/uthappizza.png",
    price: "4.99",
    description: "A unique combination of Indian Uthappam and Italian pizza.",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "images/zucchipakoda.png",
    price: "1.99",
    description: "Deep fried Zucchini with chickpea batter.",
  },
  {
    id: 2,
    name: "Vadonut",
    image: "images/vadonut.png",
    price: "1.99",
    description: "A combination of vada and donut.",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "images/elaicheesecake.png",
    price: "2.99",
    description: "New York Style Cheesecake with Indian cardamoms.",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <CartProvider>
      <Container className={`App ${darkMode ? "dark-mode" : ""}`}>
        <Button className="toggle-btn mb-3" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Chế độ sáng" : "Chế độ tối"}
        </Button>
        <SearchBar onSearch={setSearchQuery} />
        <DishesList dishes={dishes} searchQuery={searchQuery} />
        <Cart />
        <Checkout />
      </Container>
    </CartProvider>
  );
}

export default App;
