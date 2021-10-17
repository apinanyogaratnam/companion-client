import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import './Diary.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Diary(props) {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  
  const [logs, setLogs] = useState(null);
  
  useEffect(async () => {
    setLoading(true);
    
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/${props.user._id}/logs`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
      
      const resBody = await response.json();
      console.dir(resBody);
    
      if (resBody.error) {
        console.dir(resBody.error);
        window.alert("Couldn't retrieve entries, please try again");
      } else {
        setLogs(resBody.logs);
      }
    
    } catch (error) {
      console.dir(error);
      window.alert('Failed to contact server :(');
    }
    
    setLoading(false);
  }, [props.user]);

  function handleGoBack() {
    history.push('/assess');
  }
  
  return (
    <div className='width-60 flex-column gap-4'>
      <h1>My diary</h1>
      <ul className='fullwidth diary-container'>
        {
          logs && logs.map((log, index) => {
            return <>
              <li key={`log-entry-${index}`}>
                <DiaryEntry log={log} index={index}/>
              </li>
              {index !== logs.length - 1 && <hr/>}
            </>;
          })
        }
      </ul>
      <div className='fullwidth flex-row gap-2'>
        <Button className='fullwidth' variant='primary' onClick={handleGoBack}>Go Back</Button>
      </div>
    </div>
  );
}

function DiaryEntry(props) {
  return (
    <div className='flex-row' style={{justifyContent: 'flex-start'}}>
      <p className='align-left mood'>{props.log.mood}</p>
      <div className='flex-column' style={{alignItems: 'flex-start'}}>
        <p className='align-left message'>{props.log.message}</p>
        <ul>
          {
            props.log.conversations && props.log.conversations.map((conversation, index) => {
              return <>
                <li key={`log-entry-${props.index}-conversation-${index}`}>
                  <details>
                    <summary className='align-left conversation'>
                      Conversation #{index + 1}
                    </summary>
                    <p className='align-left conversation'>
                      {conversation.map(msg => {
                        return <>
                          {msg.user && <span className='align-left' style={{display: 'inline-block', minWidth: '150px'}}>You: </span>}
                          {msg.bot && <span className='align-left' style={{display: 'inline-block', minWidth: '150px'}}>Companion: </span>}
                          {msg.user ?? msg.bot}
                          {index !== conversation.length - 1 && <br/>}
                        </>;
                      })}
                    </p>
                  </details>
                </li>
              </>;
            })
          }
        </ul>
      </div>
    </div>
  );
}
