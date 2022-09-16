import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Product from "./Product";
import { setProducts } from "../redux/actions/productActions";
import React from "react";

export default function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products: ", products);
  return (
    <div style={{ marginTop: "50px" }} className="ui grid container">
      <Product />
    </div>
  );
}
