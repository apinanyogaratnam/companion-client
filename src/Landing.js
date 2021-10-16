import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import './Landing.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Animate from 'react-smooth';

export default function Landing() {
  const history = useHistory();
  
  const appearTransitionSteps = [
    {
      style: {
        transform: 'translate(0,-500px)',
      },
    },
    {
      style: {
        transform: 'translate(0,0)'
      },
      duration: 800
    }
  ];
  
  return <Animate steps={appearTransitionSteps}>
      <div className='align-center'>
        <h1>Companion</h1>
        <h2>your mindfulness buddy</h2>
        <Button className='get-started' size='lg' variant='primary' onClick={() => history.push('/register')}>Get Started</Button>
      </div>
  </Animate>;
}
