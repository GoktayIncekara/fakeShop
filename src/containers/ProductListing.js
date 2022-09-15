import { useSelector } from "react-redux";
import axios from "axios";
import Product from "./Product";
import React from "react";

export default function ProductListing() {
  const products = useSelector((state) => state);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(response.data);
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ marginTop: "50px" }} className="ui grid container">
      <Product />
    </div>
  );
}
