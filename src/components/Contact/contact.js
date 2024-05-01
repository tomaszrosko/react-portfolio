import './contact.scss';
import { Row } from 'react-bootstrap';

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
