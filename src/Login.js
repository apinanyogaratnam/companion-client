import { useHistory } from 'react-router-dom';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { UsernameField, PasswordField } from './Auth/Fields';

export default function Login(props) {
  const history = useHistory();
  const [userData, setUserData] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.formUsername.value;
    const password = form.elements.formPassword.value;
    
    const reqBody = { email, password };
    console.dir(reqBody);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/validate`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          reqBody: JSON.stringify(reqBody)
        }
      );
      
      const resBody = undefined;//await response.json();
      // console.dir(resBody);
      // console.log(await response.text());
    
      if (resBody.success) {
        props.setUser(resBody.data);
        history.push('/assess');
      } else {
        window.alert(resBody.error);
      }
    } catch (error) {
      // console.log(error);
      window.alert('Failed to contact server :(');
    }
  }
  
  return (
    <div className='align-center'>
      <h1>Log in</h1>
      <Form className='width-30' onSubmit={handleSubmit}>
        <UsernameField/>
        <PasswordField/>
        <Button className='wide' variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
}
