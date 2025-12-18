import React from 'react'
import './About.css'
import aboutone from "../../assets/about-one.jpg"
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { Col, Row } from 'react-bootstrap';
import FavoriteIcon from '@mui/icons-material/Favorite';

const About = () => {
  return (
    <>

      <div className='about-section'>
        <div className="about-one">
          <div className="about-two">
            <p>About Page</p>

            <div className="about-three">
              <img src={aboutone} alt="About section image" className="img-fluid" />
            </div>
          </div>
          <div className="para">
            <p >Theobroma means 'Food of the Gods' in Greek, befitting our exclusive and indulgent range \
              of offerings that include brownies, cakes, desserts, chocolates, breads, and savouries.
            </p><br />

            <p>From our humble beginnings in 2004, when the first Theobroma pastry store opened its doors at the iconic Cusrow Baug at Colaba Causeway (Mumbai),
              we've grown to become a Pan-India chain of patisseries with stores in over 30 cities.
            </p><br />
            <p>Our mission is to spread happiness by serving smiles on a plate, and this journey continues as we open Theobroma patisseries across the country.

            </p>
          </div>
        </div>

        <div className="about-two">
          <div className="promis-one">Our Promise</div>
          <div className="promis-two">
            <Row>
              <Col sm={12}>
                <p> <RamenDiningIcon /><br />
                  <span>RamenDiningIcon</span> <br />
                  <span>Our products are based on traditional home-style recipes, using fresh ingredients.</span>
                </p>
              </Col>
              <Col sm={12}>
                <p><span><FavoriteIcon /></span><br />
                  <span>BAKED WITH LOVE</span><br />
                  <span>Our passion for baking is poured into every recipe, serving smiles on a plate everyday.</span>
                </p>
              </Col>
              <Col sm={12}>
              
              </Col>
              <Col sm={12}></Col>
            </Row>
          </div>
        </div>


      </div>

    </>
  )
}

export default About
