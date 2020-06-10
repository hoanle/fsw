import React, { useRef } from "react";
import { useDispatch } from 'react-redux';

import './Login.css';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const signIn = () => {
        if (emailRef.current != null && passwordRef.current != null) {
            dispatch({type: 'LOGIN_SUCCESS', credentials: {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }})
            history.push('/')
            console.log("goback");
        }
    }

    return (
        <div className="Login-div">
            <div className="Login-container">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  ref={emailRef} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                    </Form.Group>

                    <Button variant="primary" onClick={signIn}>
                        Submit
          </Button>
                </Form>
            </div>
        </div>
    );
}