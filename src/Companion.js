import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Companion.css'
import { RecordableTextField } from './Auth/Fields';
import axios from 'axios';

const Companion = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [botMessage, setBotMessage] = useState('');
    // {bot: "text"}
    // {user: "text"}
    
    const getBotResponse = async (userInput) => {
        const res = await axios.post(`${process.env.REACT_APP_CHATBOT_API_URL}/${process.env.REACT_APP_TOKEN}`);
        setBotMessage(res.message);
    };

    const handleSubmitMessage = async () => {
        messages.push({user: message});
        setMessages(messages);

        // get response from bot
        await getBotResponse(message);
        messages.push({bot: botMessage});
        setMessages(messages);

        setMessage('');
        setBotMessage('');
        console.log(messages);
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
