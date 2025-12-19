import React, { useEffect, useState } from 'react'
import './Product.css'
import img1 from "../../assets/product-img1.jpg"
import axios from 'axios'
import { Col, Row, Container } from 'react-bootstrap'

const Product = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/product")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  })


  return (
    <div className='product-sectionn'>

      <div className='product-sectionn-one'>
        <div className="product-head">Theobroma Products</div>
        <div className="product-head-sub">At Theobroma, we offer a wide range of products, both sweet & savoury. Our offerings include indulgent brownies, cakes & desserts, artisanal breads, puffs & quiches, wholesome sandwiches, wraps & rolls, beverages and more.</div>

        <div className="product-image">
          <img src={img1} alt="" srcset="" className='img-fluid' />
        </div>
      </div>

      <div className="product-section-two">
        <Container>
          <Row className='g-2 roe-product'>
            {products.map((data) => (
              <Col key={data.id} xs={6} lg={3} sm={6} md={4} className="text-center mb-3 ">
                <img src={data.image} alt="" className='img-fluid' />
                <p className=''>{data.description}</p>
                <input type="button" value="Order Me" className='product-button' />
              </Col>
            ))}
          </Row>
        </Container>

      </div>
    </div>
  )
}

export default Product
