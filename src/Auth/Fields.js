import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function UsernameField(props) {
  return (
    <Form.Group className='mb-2' controlId='formUsername'>
      <Form.Label>Email address</Form.Label>
      <Form.Control type='email' placeholder=''/>
    </Form.Group>
  );
}
export function PasswordField(props) {
  return (
    <Form.Group className='mb-2' controlId='formPassword'>
      <Form.Label>Password</Form.Label>
      <Form.Control type='password' placeholder=''/>
    </Form.Group>
  );
}

export function GenericField(props){
  return (
    <Form.Group className='mb-2' controlId={props.controlid}>
      <Form.Label>{props.label_text}</Form.Label>
      <Form.Control type='text' placeholder=''/>
    </Form.Group>
  );
}
