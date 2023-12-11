import './header.scss'
import LogoT from '../../assets/img/tomek2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Container>
        <Row className='nav-bar justify-content-between'>
          <Col xs={4} className={"d-flex justify-content-start"}>
            <Link className='logo d-flex justify-content-start' to='/'>
              <img src={LogoT} alt='Logo' />
            </Link>
          </Col>
          <Col xs={8} lg={4} className={"d-flex justify-content-center align-items-center"}>
            <nav className={"d-flex justify-content-end align-items-center w-100"}>
              <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
              </NavLink>
              <NavLink activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
              </NavLink>
              <NavLink activeclassname='active' className='portfolio-link' to='/portfolio'>
                <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
              </NavLink>
              <NavLink
                activeclassname='active'
                className='contact-link'
                to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
              </NavLink>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
