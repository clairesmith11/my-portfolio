import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => (
    <Navbar className="navbar navbar-expand-lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link href="/#about">ABOUT</Nav.Link>
                <Nav.Link href="/#skills">SKILLS</Nav.Link>
                <Nav.Link href="/#projects">PROJECTS</Nav.Link>
                <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);


export default Navigation;