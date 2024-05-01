import { Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const RECAPTCHA_KEY = process.env.React_App_RECAPTCHA_KEY;

function TextZone() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [reCAPTCHAValue, setReCAPTCHAValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!reCAPTCHAValue) {
            alert('Please verify that you are not a robot.');
            return;
        }

        // Your EmailJS Data
        const serviceId = process.env.React_App_SERVICE_ID;
        const templateId = process.env.React_App_TEMPLATE_ID;
        const publicKey = process.env.React_App_PUBLIC_KEY;

        // New Object
        const templateParams = {
            from_name: name,
            from_email: email,
            from_subject: subject,
            to_name: 'Tomasz',
            message: message,
        };

        // Send Email
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                alert('Email sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
                setSubject('');
                setReCAPTCHAValue('');
            })
            .catch((error) => {
                alert('Error sending email');
            });
    };

    const handleReCAPTCHAChange = (value) => {
        setReCAPTCHAValue(value);
    };

    return (
        <Col xs={12} md={6}>
            <div className='text-zone'>
                <h1>Contact me</h1>
                <div className='contact-form'>
                    <form onSubmit={handleSubmit} className='emailForms'>
                        <ul>
                            <li className='half'>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </li>
                            <li className='half'>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </li>
                            <li className='half'>
                                <input
                                    type='text'
                                    name='subject'
                                    placeholder='Subject'
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </li>
                            <li className='half'>
                                <textarea
                                    placeholder='Message'
                                    name='message'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </li>
                            <li className='half'>
                                <ReCAPTCHA sitekey={RECAPTCHA_KEY} onChange={handleReCAPTCHAChange} />
                            </li>
                            <li className='half'>
                                <input type='submit' className='flat-button btn-send' id={'btnId'} value='SEND :)' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </Col>
    );
}

export default TextZone;
