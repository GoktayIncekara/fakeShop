import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

export default function ProductDetail() {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <img
            style={{ maxHeight: "500px" }}
            className="ui fluid image"
            src={image}
          ></img>
          <h1>{title}</h1>
          <a className="ui teal tag label">${price}</a>
          <h3 className="ui brown block header">{category}</h3>
          <p>{description}</p>
          <div className="visible content">Add to Chart</div>
        </div>
      )}
    </div>
  );
}
