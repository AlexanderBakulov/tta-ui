import React from 'react';
import { Button, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


import './header.css';

const headerView = () => {
    return (
        <Navbar bg="dark" variant= "dark" expand="lg" >
            <LinkContainer to="/">
                <Navbar.Brand><h1>TTA</h1></Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <NavDropdown title="Alexander Bakulov" id="basic-nav-dropdown">
                        <LinkContainer to="/password">
                            <NavDropdown.Item>Change password</NavDropdown.Item>
                        </LinkContainer>    
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link>Office: MSK</Nav.Link>
                    </Nav.Item> 
                    <LinkContainer to="/login">
                        <Button variant="secondary">Logout</Button>
                    </LinkContainer>                   
                </Nav> 
            </Navbar.Collapse> 
        </Navbar>
    );
}


const Header = ({isAuthorized}) => {
    console.log(isAuthorized);
    return (isAuthorized ? headerView() : null);
}

export default Header;