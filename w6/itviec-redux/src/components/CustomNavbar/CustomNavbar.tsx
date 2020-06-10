import React from 'react';
import { Navbar, Nav, NavDropdown, Image, Button } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import './CustomNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {useHistory} from 'react-router-dom';

const CustomNavbar = () => {

    const dispatch = useDispatch()

    const isAuthenticated = useSelector((state: any) => state.authenticationReducer.loggedIn);
    const history = useHistory();

    const signButton = () => {
        if (isAuthenticated) {
            dispatch({ type: 'NAVBAR_LOGOUT' })
            history.push(`/jobs`);
        } else {
            history.push(`/login`);
        }
    }

    return (
        <Navbar expand="lg" className="CustomNavbar-navbar">
            <Navbar.Brand>
                <Image className="CustomNavbar-logo" src="https://itviec.com/assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png"></Image>
            </Navbar.Brand>
            <Navbar.Toggle className="color-white"><FontAwesomeIcon icon={faCoffee} /></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto test">
                    <Nav.Link className="color-white">All Jobs</Nav.Link>
                    <NavDropdown
                        className="color-white"
                        title={
                            <span className="color-white">IT Companies</span>
                        }
                        id="basic-nav-dropdown">
                        <NavDropdown.Item>Vietnam Best IT Companies 2020</NavDropdown.Item>
                        <NavDropdown.Item>Company revies</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="color-white">Blog</Nav.Link>
                    <Button variant="dark" onClick={signButton}>{isAuthenticated ? "Sign Out" : "Sign In"}</Button>
                    <Nav.Link className="color-white">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;