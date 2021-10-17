import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Companion = () => {
    const [messages, setMessages] = useState([]);
    // {bot: "text"}
    // {user: "text"}

    return (
        <div>
            <h1>Companion</h1>
            <Form>
            <Form.Group className="mb-3 message-input" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Type message here" rows={3} />
            </Form.Group>
            </Form>
        </div>
    )
}

export default Companion;
