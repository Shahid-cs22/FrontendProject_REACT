import React, { useEffect, useState } from 'react'
import './Christmass.css'
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const Christmass = () => {

  const apiUrl = import.meta.env.VITE_API_URL;
  const [offer, setOffer] = useState([])

  useEffect(() => {
    axios.get(`${apiUrl}/christmas`)
      .then(res => setOffer(res.data))
      .catch(err => console.log(err))
  }, [])



  return (
    <>

      <div className='christmass-section'>
        <div className="xmass-one">
          <h3>🎄 Christmas Offer Content for CakeKart</h3>

          <p>This Christmas, CakeKart brings you a delightful range of plum cakes, chocolate cakes, and festive specials crafted to spread joy. Enjoy limited-time Christmas offers, special discounts, and beautifully decorated cakes perfect for gifting and celebrations.</p>
        </div>

        <div className="xmass-two">
          <Container>
            <Row>

              {offer.map((item) => (
                <Col key={item.id} lg={4} md={4} sm={6} xs={6} className="mb-4">
                  <div className="christmass-card">

                    <img src={item.image} alt={item.name} className="christmass-image img-fluid" />

                    <h6 className="mt-2 item-name">{item.name}</h6>

                    <div className="price-box">
                      <span className="original-price">₹{item.price}</span>
                      <span className="offer-price">₹{item.final_price}</span>
                    </div>
                    <p> {item.offer}</p>
                    <p className="limited-offer">🎁 Limited Time Offer</p>

                    <Link to={`/christmass/${item.id}`} className="product-button ">
                      Order Me
                    </Link>
                  </div>
                </Col>
              ))}

            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Christmass
