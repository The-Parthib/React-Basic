import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router';

const NavbarItem = () => {

    const navigate = useNavigate();

    const handleLogin = () => { 
        navigate("/login");
     }

  return (
     <>
      <Navbar expand="lg" bg='dark' data-bs-theme="dark" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">PustakK</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/list/book">List Book</Nav.Link>
          </Nav>
            <Button variant="outline-success" className='m-2'>LogIn</Button>
            <Button variant="outline-success" className='m-2' onClick={handleLogin} >Search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarItem