import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import ThankYou from "./pages/ThankYou";
import PaymentDetails from "./pages/PaymentDetails";
import { AllProductsListView } from "./pages/AllProductsListView";
import Home from "./pages/Home";
import "@progress/kendo-theme-default/dist/all.css";
import "@progress/kendo-theme-utils/dist/all.scss";
import { SizedParent } from "./components/SizedParent";
import { DetailedCategory } from "./pages/DetailedCategory";
import { ProductDetails } from "./pages/ProductsDetails";
import { CartProvider } from "./helpers/CartContext";
import { ShoppingCartList } from "./components/ShoppingCartList";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <SizedParent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paymentdetails" element={<PaymentDetails />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/products" element={<AllProductsListView />} />
            <Route path="/category" element={<DetailedCategory />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/shoppingcart" element={<ShoppingCartList />} />
          </Routes>
        </SizedParent>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
