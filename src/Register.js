import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { UsernameField, PasswordField, GenericField } from './Auth/Fields';

const Register = () => {
  return(
    <div className= "reg-container">
      <p> Register User </p>
      <Form className = 'reg'>
        <UsernameField/>
        <PasswordField/>
        <GenericField controlid = "ConfirmedPassword" label_text = "Re-enter password" />
      </Form>
      <button> Login </button>
    </div>
  );
}

export default Register
