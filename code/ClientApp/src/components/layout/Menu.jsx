import React from 'react';
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Logo from '../img/logo.png';

function Menu() {
    return (
        <Navbar bg="light" expand="lg" className="menu" sticky="top">
            <Container>
                <Navbar.Brand href="/"><figure className="logo-img my-auto me-xl-5"><Image src={Logo} alt="logo" fluid /></figure> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/local-news">LOCAL NEWS</Nav.Link>
                        <Nav.Link href="/register">CREATE NEWS</Nav.Link>
                        <NavDropdown title="SECTIONS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Action</NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/">SHOP</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <Nav.Link href="/" className="text-reset">LOG IN</Nav.Link>
                        <Nav.Link href="/" className="text-reset">SIGN UP</Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;