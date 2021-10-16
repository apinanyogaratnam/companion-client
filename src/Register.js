import { Link, useHistory } from 'react-router-dom';
import './App.css';
import './Register.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { UsernameField, PasswordField, GenericField } from './Auth/Fields';

const Register = (props) => {
  const history = useHistory();
  
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const firstName = form.elements.formFirstName.value;
    const lastName = form.elements.formLastName.value;
    const email = form.elements.formUsername.value;
    const password = form.elements.formPassword.value;
    // TODO: Validate re-entered password
    
    const body = { firstName, lastName, email, password, logs: [] };
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    );
    
    console.dir(await response.json());
    if (response.ok) {
      history.push('/reflect');
    }
  }
  
  return (
    <div className="reg-container align-center">
      <h1>Register</h1>
      <Form className='reg width-30' onSubmit={handleSubmit}>
        <GenericField controlId="formFirstName" label="First name"/>
        <GenericField controlId="formLastName" label="Last name"/>
        <UsernameField/>
        <PasswordField/>
        <PasswordField controlId="formConfirmPassword" label="Re-enter password"/>
        <Button className='wide' variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <div className='login-link-container'>
        <Button className='wide' variant='primary' onClick={() => history.push('/login')}>Log into existing account</Button>
      </div>
    </div>
  );
}

export default Register
