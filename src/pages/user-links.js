import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const LinksView = () => {
    return (
        <>
            <Nav  as="ul"> 
                <Nav.Item as="li">
                    <LinkContainer to="/admin">
                        <Nav.Link>Admin page</Nav.Link>
                    </LinkContainer>
                </Nav.Item>   
                <Nav.Item as="li">
                    <LinkContainer to="/reports">
                        <Nav.Link>Reports</Nav.Link>
                    </LinkContainer>
                </Nav.Item> 
                <Nav.Item as="li">
                    <LinkContainer to="/tickets-created">
                        <Nav.Link>Created tickets</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                    <LinkContainer to="/tickets-assigned">
                        <Nav.Link>Assigned tickets</Nav.Link>
                    </LinkContainer>
                </Nav.Item>                
            </Nav>
        </>
    );

}

const UserLinks = ({ isAuthorized }) => {
    return (
        isAuthorized ? LinksView() : null
    );
}

export default UserLinks;