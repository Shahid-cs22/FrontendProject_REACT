import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Appbar";
import About from './Pages/AboutPg/About';
import Product from './Pages/ProductPg/Product';
import Speciality from './Pages/SpecialPg/Speciality';
import Christmass from './Pages/Chriatmass/Christmass';
import Contact from './Pages/ContactPg/Contact';
import Login from './Pages/LoginPg/Login';
import AddTOCart from './Pages/AddCart/AddTOCart';
import Footer from './Components/Footer';







const App = () => {

  return (
    <>
      <Navbar />
      <About />
      <Product />
      <Speciality />
      <Christmass />
      <Contact />
      <Login />
      <AddTOCart />
      <Footer />
    </>
  )
}

export default App
