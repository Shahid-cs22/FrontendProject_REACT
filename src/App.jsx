
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
const App = () => {


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
        
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top mx-3"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-2' />
          <Navbar.Collapse id="basic-navbar-nav" className='mx-3'>
            <Nav className="ms-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
    </>
  )
}

export default App
