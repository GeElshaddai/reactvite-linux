import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import AboutPage from "../pages/AboutPage";

export default function RoutingComponent() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/product" Component={ProductsPage} />
        <Route path="/about" Component={AboutPage} />
      </Routes>
    </>
  );
}
