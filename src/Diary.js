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
  
  return (
    <div className='width-60 flex-column gap-4'>
      <h1>My diary</h1>
      <ul className='fullwidth diary-container'>
        {
          logs && logs.map((log, index) => {
            return <>
              <li key={`log-entry-${index}`}>
                <DiaryEntry log={log}/>
              </li>
              {index !== logs.length - 1 && <hr/>}
            </>;
          })
        }
      </ul>
    </div>
  );
}

function DiaryEntry(props) {
  return (
    <div className='flex-row' style={{justifyContent: 'flex-start'}}>
      <p className='align-left mood'>{props.log.mood}</p>
      <p className='align-left message'>{props.log.message}</p>
    </div>
  );
}
