import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import './Assess.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { GenericField, RecordableTextField } from './Auth/Fields';

export default function Assess(props) {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const [isSaved, setSaved] = useState(false);
  
  const [mood, setMood] = useState(null);
  const [message, setMessage] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault();
    if (isLoading) return;
    setLoading(true);
    
    const reqBody = { mood, message };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/${props.user._id}/logs`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(reqBody)
        }
      );
      
      const resBody = await response.json();
      console.dir(resBody);
    
      if (resBody.error) {
        console.dir(resBody.error);
        window.alert("Couldn't save, please try again");
      } else {
        setSaved(true);
      }
    
    } catch (error) {
      console.dir(error);
      window.alert('Failed to contact server :(');
    }
    
    setLoading(false);
  }
  
  function handleMyDiary() {
    history.push('/diary')
  }
  function handleTalkToSomeone() {
    history.push('/companion');
  }
  
  return (
    <div className='align-center flex-column gap-4'>
      <h1>Welcome back, {props.user.firstName}</h1>
      <h2>How are you feeling today?</h2>
      <MoodChooser mood={mood} setMood={setMood}/>
      <Form className='width-50' onSubmit={handleSubmit}>
        <RecordableTextField controlId='formMessage' label='Describe your day…' value={message} setValue={setMessage}/>
        <div className='align-center flex-column'>
          <Button className='fullwidth' variant='success' onClick={handleSubmit} disabled={!mood || isLoading || isSaved}>
            {isLoading ? 'Saving…' : !isSaved ? 'Save' : 'Entry saved'}
          </Button>
          <div className='fullwidth flex-row gap-2'>
            <Button className='fullwidth' variant='primary' onClick={handleMyDiary}>My diary</Button>
            <Button className='fullwidth' variant='primary' onClick={handleTalkToSomeone}>Talk to someone</Button>
          </div>
        </div>
      </Form>
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
