import React, { useState } from "react";
import * as emailjs from 'emailjs-com';
import { Form, Button, Alert } from 'react-bootstrap';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [contactSuccess, setContactSuccess] = useState(null);
    const [contactFail, setContactFail] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Claire Smith',
            message_html: message,
        };
        emailjs.send(
            'service_assdl0l',
            'template_8i3033i',
            templateParams,
            'user_5AFv9tdNDubOUZHSbzVrb'
        ).then(res => {
            setContactSuccess('Thank you for your email! I will get back with you shortly.');
        }).catch(err => setContactFail('Oops, your email could not be sent! Please try again later'));

        resetForm();
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    };


    return (
        <section id="contact" className="contact-form padding-sides-lg">
            {contactSuccess &&
                <Alert variant="success">
                    {contactSuccess}
                </Alert>}
            {contactFail &&
                <Alert variant="danger">
                    {contactFail}
                </Alert>}
            <Form onSubmit={(e) => submitHandler(e)}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} onChange={(e) => setMessage(e.target.value)} value={message} />
                </Form.Group>
                <Button variant="primary" type="submit">Send</Button>
            </Form>

        </section >
    );
};



export default ContactForm;