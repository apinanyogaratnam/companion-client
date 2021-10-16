import { useHistory } from 'react-router-dom';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { GenericField } from './Auth/Fields';

export default function Assess(props) {
  const history = useHistory();
  
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    // TODO
  }
  
  return (
    <div className='align-center'>
      <h1>Welcome back, {props.user.firstName}</h1>
      <Form className='width-30' onSubmit={handleSubmit}>
        <Button className='wide' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

function MoodChooser(props) {
  return (
    <div className='mood-chooser'>
      
    </div>
  );
}
