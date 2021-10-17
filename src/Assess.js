import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import './Assess.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { GenericField, RecordableTextField } from './Auth/Fields';

export default function Assess(props) {
  const history = useHistory();
  const [mood, setMood] = useState(null);
  const [message, setMessage2] = useState('');
  function setMessage(newMessage) {
    console.log(newMessage);
    setMessage2(newMessage);
  }
  
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
  }

  function handleTalkToSomeone() {
    console.log('Clicked!');
    history.push('/companion');
  }
  
  return (
    <div className='align-center flex-column gap-4'>
      <h1>Welcome back, {props.user.firstName}</h1>
      <h2>How are you feeling today?</h2>
      <MoodChooser mood={mood} setMood={setMood}/>
      <Form className='width-50' onSubmit={handleSubmit}>
        <RecordableTextField controlId='formMessage' label='Describe your day…' value={message} setValue={setMessage}/>
        <Button className='fullwidth' variant="primary" onClick={handleSubmit} disabled={!mood}>
          Continue
        </Button>
      </Form>
      <Button className="" variant="primary" onClick={handleTalkToSomeone}>Talk to someone</Button>
    </div>
  );
}

function MoodChooser(props) {
  
  return (
    <div className='mood-chooser'>
      <MoodButton currentMood={props.mood} setMood={props.setMood} mood='☺️'/>
      <MoodButton currentMood={props.mood} setMood={props.setMood} mood='😄'/>
      <MoodButton currentMood={props.mood} setMood={props.setMood} mood='😀'/>
      <MoodButton currentMood={props.mood} setMood={props.setMood} mood='🙂'/>
      <MoodButton currentMood={props.mood} setMood={props.setMood} mood='😐'/>
      <hr/>
      <MoodButton currentMood={props.mood} setMood={props.setMood} mood='😕'/>
      <MoodButton currentMood={props.mood} setMood={props.setMood} mood='☹️'/>
      <MoodButton currentMood={props.mood} setMood={props.setMood} mood='😔'/>
      <MoodButton currentMood={props.mood} setMood={props.setMood} mood='😥'/>
      <MoodButton currentMood={props.mood} setMood={props.setMood} mood='😭'/>
    </div>
  );
}

function MoodButton(props) {
  return (
    <Button size='sm' variant='primary' className={'mood-button '} active={props.currentMood == props.mood} onClick={() => props.setMood(props.mood)}>{props.mood}</Button>
  );
}
