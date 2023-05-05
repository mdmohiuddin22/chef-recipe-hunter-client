/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */


import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Registration = () => {
    const {createUser}= useContext(AuthContext);

    const handleRegister =event =>{
        event.preventDefault();
        const form =event.target;
        const name =form.name.value;
        const email=form.email.value;
        // const password= form.password.value;
    
        console.log(name, email)
    }
    return (
        <Container className='w-25 mx-auto'>
               <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name"name='name' placeholder="Enter name" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
       Register
      </Button>
    </Form>
        </Container>
    );
};

export default Registration;