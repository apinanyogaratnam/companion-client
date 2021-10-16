import { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login(props) {
  return (
    <Form className='w'>
      <UsernameField/>
      <PasswordField/>
      <Button variant="primary" type="submit">
        Log in
      </Button>
    </Form>
  );
}

function UsernameField(props) {
  return (
    <Form.Group className='mb-2' controlId='formUsername'>
      <Form.Label>Username</Form.Label>
      <Form.Control type='text' placeholder=''/>
    </Form.Group>
  );
}
function PasswordField(props) {
  return (
    <Form.Group className='mb-2' controlId='formPassword'>
      <Form.Label>Password</Form.Label>
      <Form.Control type='text' placeholder=''/>
    </Form.Group>
  );
}
