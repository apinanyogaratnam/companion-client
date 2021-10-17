import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Companion.css'

const Companion = () => {
    const [messages, setMessages] = useState([]);
    // {bot: "text"}
    // {user: "text"}

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
            <Form className="message-input">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Type message here" rows={3} />
            </Form.Group>
            </Form>
        </div>
    );
}

export default Companion;
