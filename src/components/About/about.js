import './about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact, faSlack,
} from '@fortawesome/free-brands-svg-icons'
import { Col, Row } from 'react-bootstrap'

const About = () => {

  return (
    <section className={'about'}>
      <div className='container about-page'>
        <div className='tags top-tags-html'>&lt;html&gt;</div>
        <Row>
          <Col xs={12} md={6}>
            <div className='text-zone'>
              <h1>
                About me
              </h1>
              <p>Happy husband. Curious about the world, technology and people. Few years ago  I've also become curious about the digital world.</p>
              <p>I have been developing my skills working commercially as a Frontend Developer for over two years, where I put my theoretical knowledge into practice.</p>
              <p>Team player. I enjoy volleyball. Physical effort, goals setting, competing and celebrating victories together give me positive vibes and freshness.</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className='stage-cube-cont'>
              <div className='cubespinner'>
                <div className='face1'>
                  <FontAwesomeIcon icon={faSlack} color='#DD0031' />
                </div>
                <div className='face2'>
                  <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                </div>
                <div className='face3'>
                  <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                </div>
                <div className='face4'>
                  <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className='face5'>
                  <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>
                <div className='face6'>
                  <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className='tags bottom-tag-html'>&lt;/html&gt;</div>
      </div>
    </section>
  )
}

export default About
