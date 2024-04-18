import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "@components/Header/Header.jsx";
import SectionBreak from "@components/SectionBreak/SectionBreak.jsx";
import Footer from "@components/Footer/Footer";
import CartItemsProvider from "@context/CartItemsContext/CartItemsProvider";
import { create } from "zustand";

function App() {
  return (
    <CartItemsProvider>
      <Header />

      <SectionBreak />

      <Outlet />

      <Footer />
    </CartItemsProvider>
  );
}

export default App;
