import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { Form, Button, Col, Row } from 'react-bootstrap';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const email = e.target.value;
            if (email) {
                const isValid = validateEmail(email);
                
                if (!isValid) {
                    setErrorMessage('Your email is invalid');
                } 
            } else {
                setErrorMessage('email is required');
            }

            
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        // <section>
        //     <h1 >Contact Me</h1>
        //     <form id="contact-form" onSubmit={handleSubmit}>
        //         <div style={{justifyContent: "center"}}>
        //             <label htmlFor="name">Name:</label>
        //             <input type="text" defaultValue={name} placeholder='John Appleseed' onBlur={handleChange} name="name" />
        //         </div>
        //         <div style={{justifyContent: "center"}}>
        //             <label htmlFor="email">Email address:</label>
        //             <input type="email" defaultValue={email} name="email" placeholder='jseed@mail.com' onBlur={handleChange} />
        //         </div>
        //         <div style={{justifyContent: "center"}}>
        //             <label htmlFor="message">Message:</label>
        //             <textarea name="message" defaultValue={message} placeholder="What's on your mind?" onBlur={handleChange} rows="5"  />
        //         </div>
        //         {errorMessage && (
        //             <div>
        //                 <p className="error-text">{errorMessage}</p>
        //             </div>
        //         )}
        //         <button type="submit" data-testid='button'>Submit</button>
        //     </form>
        // </section>
        <section>
            <h1 >Contact Me</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-md-center">
                    <Col xs={7} >
                        <Form.Group id="contact-form" className="mb-3" controlId="formName">
                            <Form.Label htmlFor='name'>Name:</Form.Label>
                            <Form.Control type="text" placeholder="John Appleseed" defaultValue={name} onBlur={handleChange} name="name" />
                        </Form.Group>
                    </Col>

                <Col xs={7}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label htmlFor='email'>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="johnappleseed@mail.com" defaultValue={email} onBlur={handleChange} name="email" />
                    </Form.Group>
                </Col>

                <Col xs={7}>
                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label htmlFor='message'>Message</Form.Label>
                        <Form.Control type="textarea" defaultValue={message} placeholder="What's on your mind?" onBlur={handleChange} />
                    </Form.Group>
                </Col>
                </Row>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </section>
    )
}

export default ContactForm;