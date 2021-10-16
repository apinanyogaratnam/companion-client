import { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { UsernameField, PasswordField } from './Auth/Fields';

export default function Login(props) {
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const username = form.elements.formUsername.value;
    const password = form.elements.formPassword.value;
    const response = await fetch(
      `${props.apiURL}/verify/${encodeURIComponent(username)}`,
      {
        method: 'POST',
        headers: ''
      }
    );
  }
  
  return <>
    <h1>Log in</h1>
    <Form className='width-30' onSubmit={handleSubmit}>
      <UsernameField/>
      <PasswordField/>
      <Button variant="primary" type="submit">
        Log in
      </Button>
    </Form>
  </>;
}
