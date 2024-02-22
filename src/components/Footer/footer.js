import './footer.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return(
    <>
  <section className={"Footer"}>
    <Container>
      <Row className={"justify-content-center"}>
        <Col xs={10} md={4} className={"d-flex flex-column justify-content-center"}>
          <ul>
            <li>
              <a
                href='https://www.linkedin.com/in/tomaszrosko/'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/tomaszrosko'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
              </a>
            </li>
            <li>
              <a href='skype:live:tomasz.rosko' rel='noreferrer' target='_blank'>
                <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
              </a>
            </li>
          </ul>
          <span>Copyright © 2024 Tomasz Rośko</span>
        </Col>
      </Row>
    </Container>
  </section>
    </>
  )
}

export default Footer


