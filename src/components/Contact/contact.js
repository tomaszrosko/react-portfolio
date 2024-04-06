import './contact.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';

const reCAPTCHA_KEY = process.env.React_App_RECAPTCHA_KEY;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

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

  const [reCAPTCHAValue, setReCAPTCHAValue] = useState('');

  const handleReCAPTCHAChange = (value) => {
    setReCAPTCHAValue(value);
  };

  return (
    <>
      <section className={'contact'}>
        <div className='container contact-page'>
          <div className='tags top-tags-html'>&lt;html&gt;</div>
          <Row>
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
                          type='text'
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
                        <ReCAPTCHA sitekey={reCAPTCHA_KEY} onChange={handleReCAPTCHAChange} />
                      </li>
                      <li className='half'>
                        <input type='submit' className='flat-button btn-send' id={'btnId'} value='SEND :)' />
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div id='map'>
                <MapContainer center={[50.0614300, 19.9365800]} zoom={12} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  />
                  <Marker position={[50.066689397237035, 19.92169776751558]}>
                    <Popup>
                      Tu mieszkam :)
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </Col>
          </Row>
          <div className='tags bottom-tag-html'>&lt;/html&gt;</div>
        </div>
      </section>
    </>
  );
};

export default Contact;
