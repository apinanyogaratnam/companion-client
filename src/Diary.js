import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import './Diary.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Diary(props) {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  
  const [log, setLog] = useState(null);
  
  useEffect(async () => {
    setLoading(true);
    
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/${props.user._id}/logs`,
        {
          method: 'GET',
          headers: {
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
        setLog(resBody.logs);
      }
    
    } catch (error) {
      console.dir(error);
      window.alert('Failed to contact server :(');
    }
    
    setLoading(false);
  }, [props.user]);
  
  return (
    <div className='align-center flex-column gap-4'>
      <h1>My diary</h1>
    
    </div>
  );
}
