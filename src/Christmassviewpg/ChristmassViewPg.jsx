import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./ChristmassViewPg.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useDispatch } from "react-redux";
import { addItem } from "../Reduxx/CartSlice";
import Christmass from "../Pages/Chriatmass/Christmass";
const apiUrl = import.meta.env.VITE_API_URL;

const ChristmassViewPg = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navi = useNavigate();
  const goToChristmass = () => navi("/christmass");

  function addItems() {
    dispatch(addItem(product));
  }

  useEffect(() => {
    axios
      .get(`${apiUrl}/christmas/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct(false));
  }, [id]);

  if (product === null) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (product === false) {
    return <div className="text-center mt-5">Product not found</div>;
  }

  function addItems() {
    dispatch(addItem(product));
  }

  return (
    <>
      {<p>{product.offer}</p>}
      <div className="christmas-view">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>

        <div className="price-box">
          <span className="original-price">₹{product.price}</span>
          <span className="offer-price">₹{product.final_price}</span>
        </div>

        <p className="limited-offer">🎁 Limited Time Christmas Offer</p>

        <div className="d-flex justify-content-center gap-3 mt-3">
          <input
            type="button"
            value="Go To Product List"
            onClick={goToChristmass}
            className="btn-btn-color"
          />

          <Button variant="warning" onClick={addItems}>
            <ShoppingCartCheckoutIcon /> Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChristmassViewPg;
