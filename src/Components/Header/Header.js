
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" bg="dark" variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand className='fw-bold ms-5 text-uppercase ' href="#">
                        The Luxurious
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">The Luxurious</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Shop</Nav.Link>
                                <NavDropdown title="Get in Touch" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Contact</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">About Us</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;