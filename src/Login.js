import { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { UsernameField, PasswordField } from './Auth/Fields';

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
