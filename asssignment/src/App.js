import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { CartProvider } from "./context/CartContext"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import CategoryPage from "./pages/CategoryPage"
import BrandPage from "./pages/BrandPage"
import CartPage from "./pages/CartPage"
import SearchPage from "./pages/SearchPage"

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/brand/:id" element={<BrandPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </CartProvider>
    </Router>
  )
}

export default App;