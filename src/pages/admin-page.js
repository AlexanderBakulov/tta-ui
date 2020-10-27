import React from 'react';
import { Alert, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
 

const AdminPage = () => {
  

    return (
        <>
            <Alert variant="secondary"><h2>Admin page</h2></Alert>
            <Nav  as="ul"> 
                <Nav.Item as="li">
                    <LinkContainer to="/add-user">
                        <Nav.Link>Add user</Nav.Link>
                    </LinkContainer>
                </Nav.Item>  
                <Nav.Item as="li">
                    <LinkContainer to="/users/">
                        <Nav.Link>Find users</Nav.Link>
                    </LinkContainer>
                </Nav.Item> 
                    
            </Nav>
        </>
    );

}

export default AdminPage;