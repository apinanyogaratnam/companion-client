import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Companion.css'
import { RecordableTextField } from './Auth/Fields';
import axios from 'axios';

const Companion = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [botMessage, setBotMessage] = useState('');
    
    const getBotResponse = async (userInput) => {
        const url = "https://companion-api-htv5.herokuapp.com/api/v1/12345678";
        const res = await fetch(
            url,
            {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({message: userInput})
            }
          );
        const resBody = await res.json();
        setBotMessage(resBody);

        return resBody.message;
    };

    const handleSubmitMessage = async () => {
        messages.push({user: message});
        setMessages(messages);
        const msg = message;
        setMessage('');

        // get response from bot
        var data = await getBotResponse(msg);
        if (data === '') data = "Can you rephrase that? I don't seem to understand";
        messages.push({bot: data});
        setMessages(messages);

        setBotMessage('');
    };

    return (
        <div>
            <h1>Companion</h1>
            <div className="messages-view-container">
                <div className="messages-view">
                    <div className="message">
                        {
                            messages.map(msg => {
                                return(
                                    <div>
                                        {msg.user ? <div className="user-message">You: {msg.user}</div> : <div className="bot-message">Bot: {msg.bot}</div>}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            <RecordableTextField className="message-input" controlId='formMessage' label='Type Message Here' value={message} setValue={setMessage} onKeyPress={(e) => e.key === 'Enter' && handleSubmitMessage()}/>
        </div>
    );
}

export default Companion;
