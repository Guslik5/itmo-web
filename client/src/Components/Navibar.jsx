import React, { useState } from 'react';
import '../css/Navibar.css';
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navibar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-dark" variant='dark'>
                <Navbar.Brand className={"m-3 mx-5"}>Logo</Navbar.Brand>
                <Navbar.Toggle className="mx-4" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="mx-4">
                        <NavItemWithAnimation to="/" label="Home" />
                        <NavItemWithAnimation to="/cars" label="Cars" />
                        <NavItemWithAnimation to="/owners" label="Owners" />
                        <NavItemWithAnimation to="/contacts" label="Contacts" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

const NavItemWithAnimation = ({ to, label }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Nav.Link
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                to={to}
                className={`page-link element ${isHovered ? 'element--hovered' : ''}`}
            >
                {label}
            </Link>
        </Nav.Link>
    );
};
