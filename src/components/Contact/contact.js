import './contact.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const btnSend = document.querySelector('#btnId')

  const handleSubmit = (e) => {
    btnSend.value = 'Sending...'
    e.preventDefault()

    // Your EmailJJ Date
    const serviceId = 'xxx'
    const templateId = 'xxx'
    const publicKey = 'xxx'

    // New Object
    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      to_name: 'Tomasz',
      message: message,
    }

    //Send Email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert('Email sent successfully!')
        btnSend.value = 'Send Email....'
        setName('')
        setEmail('')
        setMessage('')
        setSubject('')
      })
      .catch((error) => {
        alert('Error sending email')
      })
  }
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
                        <input type='text' name='name' placeholder='Name' value={name}
                               onChange={(e) => setName(e.target.value)} required />
                      </li>
                      <li className='half'>
                        <input type='text' name='email' placeholder='Email' value={email}
                               onChange={(e) => setEmail(e.target.value)} required />
                      </li>
                      <li className='half'>
                        <input type='text' name='subject' placeholder='Subject' value={subject}
                               onChange={(e) => setSubject(e.target.value)} required />
                      </li>
                      <li className='half'>
                <textarea
                  placeholder='Message'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required>

                </textarea>
                      </li>
                      <li className='half'>
                        <input type='submit' className='flat-button btn-send' id={'btnId'} value='SEND :)'></input>
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
  )
}

export default Contact

