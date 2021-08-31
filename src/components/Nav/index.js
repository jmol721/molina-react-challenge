import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav'
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation(props) {
    const {
        navOptions,
        setCurrentNavSelected 
    } = props;

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Jose M</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link href="#aboutme" onClick={() => setCurrentNavSelected(navOptions[0].id)}>{navOptions[0].name}</Nav.Link>
                <Nav.Link href="#portfolio" onClick={() => setCurrentNavSelected(navOptions[1].id)}>{navOptions[1].name}</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;