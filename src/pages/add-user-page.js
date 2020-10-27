import React from 'react';
import { Alert, Button, Container, Form, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// {
//     "loginName":"логин пользователя",  
//     "password":"пароль",
//     “email”:”email”,
//     “firstName”:”имя”,
//     “lastName”:”фамилия”,
//     "roles":[“USER”, “MANAGER”, “SUPPORT", “ADMIN”],
//     “office”:”MSK” | “SPB” | “NSK”
//   }

const AddUserPage = () => {
    return (
        <>
            <Alert variant="secondary">
                <Container>
                    <Row>
                        <Col><h2>Add user</h2></Col>
                    </Row>   
                </Container>

            </Alert>
            <Container>
                
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="formLogin">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="text" placeholder="Enter login" required/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                            <Form.Group controlId="ControlSelect1">
                                <Form.Label>Role</Form.Label>
                                <Form.Control as="select">
                                    <option></option>
                                    <option>ADMIN</option>
                                    <option>MANAGER</option>
                                    <option>USER</option>
                                    <option>SUPPORT</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="ControlSelect2">
                                <Form.Label>Office</Form.Label>
                                <Form.Control as="select">
                                    <option></option>
                                    <option>MSK</option>
                                    <option>SPB</option>
                                    <option>NSK</option>
                                </Form.Control>
                            </Form.Group>
                            <LinkContainer to="/admin">
                                <Button  variant="secondary">Back</Button>
                            </LinkContainer>  
                            <span> </span>                          
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>      
                        </Form>
                    </Col>
                    <Col lg="6"></Col>
               
                </Row>
                
            </Container>
            


             
        </>
    );
}

export default AddUserPage;