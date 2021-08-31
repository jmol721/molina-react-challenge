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
            <Navbar.Brand href="#aboutme" onClick={() => setCurrentNavSelected(navOptions[0].id)}>Jose Molina</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link href="#aboutme" onClick={() => setCurrentNavSelected(navOptions[0].id)}>{navOptions[0].name}</Nav.Link>
                <Nav.Link href="#portfolio" onClick={() => setCurrentNavSelected(navOptions[1].id)}>{navOptions[1].name}</Nav.Link>
                <Nav.Link href="#contact" onClick={() => setCurrentNavSelected(navOptions[2].id)}>{navOptions[2].name}</Nav.Link>
                <Nav.Link href="#resume" onClick={() => setCurrentNavSelected(navOptions[3].id)}>{navOptions[3].name}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;