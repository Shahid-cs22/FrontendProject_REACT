import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginIcon from '@mui/icons-material/Login';

const Appbar = () => {
    return (
        <div>
            <Navbar expand="lg" className="navbar-bg">
                <Container fluid>
                    <Navbar.Brand href="#home" className='nav-brand'>
                        <img
                            alt=""
                            src="/cake-logo1.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Cake Kart
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0 nav-brand gap-2 align-items-center" navbarScroll>
                            <Nav.Link href="#aboutus">About Us</Nav.Link>
                            <Nav.Link href="#product">Products</Nav.Link>
                            <Nav.Link href="#speciality">Speciality Cakes</Nav.Link>
                            <Nav.Link href="#christmass">Christmass Cakes</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>

                            <Nav.Item>
                                <Button

                                    href="#login"
                                    className="d-flex align-items-center gap-1 nav-button" style={{ backgroundColor: 'rgba(59, 209, 59, 0.72)', border: 'none' }}
                                >
                                    <LoginIcon fontSize="small" />
                                    Login
                                </Button>
                            </Nav.Item>
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Appbar
