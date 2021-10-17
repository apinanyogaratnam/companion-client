import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Companion.css'
import { RecordableTextField } from './Auth/Fields';
import axios from 'axios';

const Companion = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    // {bot: "text"}
    // {user: "text"}
    
    const handleSubmitMessage = () => {
        messages.push({user: message});
        setMessages(messages);
        setMessage('');

        // get response from bot

    };

    return (
        <div>
            <h1>Companion</h1>
            <div className="messages-view-container">
                <div className="messages-view">
                    <div className="message">
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>

            <RecordableTextField className="message-input" controlId='formMessage' label='Type Message Here' value={message} setValue={setMessage} onKeyPress={(e) => e.key === 'Enter' && handleSubmitMessage()}/>
        </div>
    );
}

export default Companion;
