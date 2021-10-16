import { useHistory } from 'react-router-dom';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { UsernameField, PasswordField } from './Auth/Fields';

export default function Login(props) {
  const history = useHistory();
  
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.formUsername.value;
    const password = form.elements.formPassword.value;
    
    const body = { email, password };
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/verify`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    );
    window.alert(await response.json());
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
