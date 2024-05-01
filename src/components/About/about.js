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

const icCubeFace1 = faSlack;
const icCubeFace2 = faHtml5;
const icCubeFace3 = faCss3;
const icCubeFace4 = faReact;
const icCubeFace5 = faJsSquare;
const icCubeFace6 = faGitAlt;

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
                <div className='cubeFace1'>
                  <FontAwesomeIcon icon={icCubeFace1} />
                </div>
                <div className='cubeFace2'>
                  <FontAwesomeIcon icon={icCubeFace2} />
                </div>
                <div className='cubeFace3'>
                  <FontAwesomeIcon icon={icCubeFace3} />
                </div>
                <div className='cubeFace4'>
                  <FontAwesomeIcon icon={icCubeFace4} />
                </div>
                <div className='cubeFace5'>
                  <FontAwesomeIcon icon={icCubeFace5} />
                </div>
                <div className='cubeFace6'>
                  <FontAwesomeIcon icon={icCubeFace6} />
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
