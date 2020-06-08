import React from "react";
import './Login.css';
import { Container, Form, Button } from 'react-bootstrap';

type LoginProps = {
  signIn: () => void
}
export default function Login(props:LoginProps) {

  return (
    <div className="Login-div">
      <div className="Login-container">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={() => props.signIn()}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}