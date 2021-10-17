import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Recorder from '../Recorder';

export function UsernameField(props) {
  return (
    <Form.Group className='mb-2' controlId={props.controlId ?? 'formUsername'}>
      <Form.Control type='email' placeholder={props.label ?? 'Email address'}/>
    </Form.Group>
  );
}

export function PasswordField(props) {
  return (
    <Form.Group className='mb-2' controlId={props.controlId ?? 'formPassword'}>
      <Form.Control type='password' placeholder={props.label ?? 'Password'}/>
    </Form.Group>
  );
}

export function GenericField(props){
  return (
    <Form.Group className='mb-2' controlId={props.controlId}>
      <Form.Control type='text' placeholder={props.label} value={props.value}/>
    </Form.Group>
  );
}

export function RecordableTextField(props) {
  return (
    <Form.Group className='mb-2 flex-row' controlId={props.controlId}>
      <Form.Control type='text' placeholder={props.label} value={props.value} onChange={e => props.setValue(e.target.value)} onKeyPress={props.onKeyPress}/>
      <Recorder text={props.value} setText={props.setValue}/>
    </Form.Group>
  );
}
