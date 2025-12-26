import React from 'react'
import './AddToCart.css'
import { useDispatch, useSelector } from 'react-redux';
const AddToCart = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart.cartItems);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className="addcart-section">
        <h2 className='pt-5'>Add To Cart Page</h2>
      </div>
      
    </>
  )
}

export default AddToCart
