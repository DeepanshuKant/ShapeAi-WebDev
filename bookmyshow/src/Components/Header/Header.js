
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container className="main__container">
                    <Navbar.Brand href="#">BookMyShow</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="search__box">
                        <Nav className=" me-2" style={{ maxHeight: '100px' }} navbarScroll>
                        </Nav>
                        <Form className="search__bar d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search for movies, Plays, Events,Sports and Activities"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
            <Container fluid style={{ background: "rgb(32, 32, 32)", color: "white", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "40%", display: "flex", justifyContent: "flex-start" }}>
                    <a className="items__list">Movies</a>
                    <a className="items__list">Streams</a>
                    <a className="items__list">Events</a>
                    <a className="items__list">Plays</a>
                    <a className="items__list">Sports</a>
                    <a className="items__list">Activities</a>
                    <a className="items__list">Buzz</a>
                </div>

                <div style={{ width: "40%", display: "flex", justifyContent: "flex-end" }}>
                    <a className="items__list">List your show</a>
                    <a className="items__list">Corporates</a>
                    <a className="items__list">Offers</a>
                </div>
            </Container>
        </div >
    );
}

export default Header;