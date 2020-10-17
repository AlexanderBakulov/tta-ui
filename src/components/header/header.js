import React from 'react';
import { Button, Navbar, Nav} from 'react-bootstrap';

import './header.css';

const Header = () => {
    return(
        <Navbar bg="dark" variant= "dark" expand="lg" >
            <Navbar.Brand href="#home">TTA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="#">Alexander Bakulov</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>                        
                    </Nav.Item> */}
                    <Nav.Item>
                        <Button variant="secondary">Logout</Button>
                    </Nav.Item>                    
                </Nav> 
                
            </Navbar.Collapse> 
        </Navbar>
    );
}

export default Header;