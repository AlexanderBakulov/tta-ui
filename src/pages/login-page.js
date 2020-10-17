import React from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginPage = () => {
    return (
        <Form>
            <Form.Group controlId="validationCustomUsername">
                <Form.Label>Login</Form.Label>
                <Form.Control type="text" placeholder="Login name" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default LoginPage;