import React from "react";
import ProductDetails from "../features/product/components/ProductDetails";
import NavBar from "../features/navbar/NavBar";

function ProductDetailPage() {
  return (
    <NavBar>
      <ProductDetails></ProductDetails>
    </NavBar>
  );
}

export default ProductDetailPage;
