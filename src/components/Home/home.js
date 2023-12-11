import { Link } from 'react-router-dom'
import './home.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import { Col, Row } from 'react-bootstrap'

const Home = () => {
  const [letterClass] = useState('text-animate')
  const nameArray = ['o', 'm', 'a', 's', 'z']

  return (
    <section className={'home'}>
      <div className='container home-page'>
        <div className='tags top-tags-html'>&lt;html&gt;</div>
        <Row>
          <Col xs={12}>
            <div className='text-zone offset-1'>
              <h1>
                <span className={letterClass}>h</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>i</span>
                <span className={`${letterClass} _14`}>'m</span>
                <span className={'firstName'}>
                  <span className={'letterT'}>t</span>
                  <AnimatedLetters letterClass={letterClass}
                                   strArray={nameArray}
                                   idx={15} />
                  </span>
                <br />
                <h2><i>Frontend Developer</i></h2>
              </h1>
              <Link to='/contact' className='flat-button'><i>CONTACT TO</i></Link>
            </div>
          </Col>
        </Row>
        <div className='tags bottom-tag-html'>&lt;/html&gt;</div>
      </div>
    </section>
  )
}

export default Home
