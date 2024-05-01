import './contact.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';

import Map from './components/map';
import TextZone from './components/textZone'




const Contact = () => {

  return (
    <>
      <section className={'contact'}>
        <div className='container contact-page'>
          <div className='tags top-tags-html'>&lt;html&gt;</div>
          <Row>
            <TextZone/>
            <Map/>
          </Row>
          <div className='tags bottom-tag-html'>&lt;/html&gt;</div>
        </div>
      </section>
    </>
  );
};

export default Contact;
