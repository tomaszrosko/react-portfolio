import './portfolio.scss';
import { Card, Container, Ratio } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import jpgBlog from '../../assets/img/blog.jpg';
import jpgPortfolio from '../../assets/img/porfolio.jpg';
import jpgShopSample from '../../assets/img/shopSample.jpg';
import jpgSandwiches from '../../assets/img/sandwiches.jpg';
import jpgVestfrost from '../../assets/img/vestfrost.jpg';
import jpgSharp from '../../assets/img/sharp.jpg';
import svgTailwindCss from '../../assets/img/svg/tailwindCssIcon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faJs, faReact, faSass, } from '@fortawesome/free-brands-svg-icons';
import {
  faBriefcase, faEnvelope,
  faFileExport, faFileInvoice, faList,
  faMap,
  faMobile,
  faSpinner, faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const urlBlog = 'https://www.magdalenarosko.pl';
const urlPortfolio = 'https://www.tomaszrosko.pl';
const urlShopSample = 'https://react-shop-sample.netlify.app/';

const urlBlogGitHub = 'https://github.com/tomaszrosko/react-blog/tree/dev';
const urlPortfolioGitHub = 'https://github.com/tomaszrosko/react-portfolio/tree/dev';
const urlSandwichesGitHub = 'https://github.com/tomaszrosko/reactjs-making-sandwich/tree/develop';
const urlShopSampleGitHub = 'https://github.com/tomaszrosko/react-shop-sample/tree/dev';

function Portfolio() {
  return (
    <section className={'portfolio'}>
      <Container>
        <div className='grid'>
          <div className='grid-item grid-item1'>
            <a href={urlBlog} target='_blank'>
              <Ratio className={'ratio-card'}>
                <div className='card'>
                  <div className='card-inner'>
                    <div className='card-front'>
                      <Image src={jpgBlog} fluid title='Blog' alt='Blog' width='650' height='366' />
                    </div>
                    <div className='card-back'>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={jpgBlog} />
                        <Card.Body>
                          <ul className={'list-unstyled p-2'}>
                            <li><FontAwesomeIcon icon={faReact} color='#000' />React</li>
                            <li><FontAwesomeIcon icon={faBootstrap} color='#000' />React Bootstrap</li>
                            <li><FontAwesomeIcon icon={faSass} color='#000' />Sass</li>
                            <li><FontAwesomeIcon icon={faJs} color='#000' />Java Script</li>
                            <li><FontAwesomeIcon icon={faEnvelope} color='#000' />Email.js</li>
                            <li><FontAwesomeIcon icon={faFileExport} color='#000' />Json</li>
                            <li><FontAwesomeIcon icon={faMobile} color='#000' />Mobile First</li>
                            <li><FontAwesomeIcon icon={faSpinner} color='#000' />Static content loading</li>
                          </ul>
                          <Card.Link target='_blank' className={'btn btn-dark'} href={urlBlogGitHub}>Link Repo</Card.Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Ratio>
            </a>
          </div>
          <div className='grid-item grid-item2'>
            <a href={urlPortfolio} target='_blank'>
              <Ratio className={'ratio-card'}>
                <div className='card'>
                  <div className='card-inner'>
                    <div className='card-front'>
                      <Image src={jpgPortfolio} fluid title='Portfolio' alt='Potfolio' width='650' height='366' />
                    </div>
                    <div className='card-back'>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={jpgPortfolio} />
                        <Card.Body>
                          {/*<Card.Title>Card Title</Card.Title>*/}
                          <ul className={'list-unstyled p-2'}>
                            <li><FontAwesomeIcon icon={faReact} color='#000' />React</li>
                            <li><FontAwesomeIcon icon={faBootstrap} color='#000' />React Bootstrap</li>
                            <li><FontAwesomeIcon icon={faSass} color='#000' />Sass</li>
                            <li><FontAwesomeIcon icon={faEnvelope} color='#000' />Email.js</li>
                            <li><FontAwesomeIcon icon={faMap} color='#000' />React-leaflet</li>
                            <li><FontAwesomeIcon icon={faJs} color='#000' />Java Script</li>
                            <li><FontAwesomeIcon icon={faFileExport} color='#000' />Json</li>
                            <li><FontAwesomeIcon icon={faMobile} color='#000' />Mobile First</li>
                          </ul>
                          <Card.Link target='_blank' className={'btn btn-dark'} href={urlPortfolioGitHub}>Link Repo</Card.Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Ratio>
            </a>
          </div>
          <div className='grid-item grid-item3'>
            <a href={urlShopSample} target='_blank'>
              <Ratio className={'ratio-card'}>
                <div className='card'>
                  <div className='card-inner'>
                    <div className='card-front'>
                      <Image src={jpgShopSample} fluid title='React shop sample' alt='React shop sample' width='650' height='366' />
                    </div>
                    <div className='card-back'>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={jpgShopSample} />
                        <Card.Body>
                          <ul className={'list-unstyled p-2'}>
                            <li><FontAwesomeIcon icon={faReact} color='#000'/>React</li>
                            <li><img src={svgTailwindCss} alt="Tailwind Css" title="Tailwind Css"/>Tailwind Css</li>
                            <li><FontAwesomeIcon icon={faSass} color='#000'/>Sass</li>
                            <li><FontAwesomeIcon icon={faJs} color='#000'/>Java Script</li>
                          </ul>
                          <Card.Link target='_blank' className={'btn btn-dark'} href={urlShopSampleGitHub}>Link Repo</Card.Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Ratio>
            </a>
          </div>
          <div className='grid-item grid-item4'>
            <a href={urlSandwichesGitHub} target='_blank'>
              <Ratio className={'ratio-card'}>
                <div className='card'>
                  <div className='card-inner'>
                    <div className='card-front'>
                      <Image src={jpgSandwiches} fluid title='Sandwiches' alt='Sandwiches' width='650' height='366' />
                    </div>
                    <div className='card-back'>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={jpgSandwiches} />
                        <Card.Body>
                          <ul className={'list-unstyled p-2'}>
                            <li><FontAwesomeIcon icon={faReact} color='#000' />React</li>
                            <li><FontAwesomeIcon icon={faSass} color='#000' />Sass</li>
                            <li><FontAwesomeIcon icon={faList} color='#000' />Automatic order summary</li>
                            <li><FontAwesomeIcon icon={faXmark} color='#000' />Dynamic deletion</li>
                          </ul>
                          <Card.Link target='_blank' className={'btn btn-dark'} href={urlSandwichesGitHub}>Link Repo</Card.Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Ratio>
            </a>
          </div>
          <div className='grid-item grid-item5'>
            <Link className='contact-link' to='/contact'>
              <Ratio className={'ratio-card'}>
                <div className='card'>
                  <div className='card-inner'>
                    <div className='card-front'>
                      <Image src={jpgVestfrost} fluid title='Vestfrost' alt='Vestfrost' width='650' height='366' />
                    </div>
                    <div className='card-back'>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={jpgVestfrost} />
                        <Card.Body>
                          <ul className={'list-unstyled p-2'}>
                            <li><FontAwesomeIcon icon={faBriefcase} color='#000' />Commercial</li>
                            <li><FontAwesomeIcon icon={faFileInvoice} color='#000' />Theme</li>
                          </ul>
                          <Link className='btn btn-dark' to='/contact'>More info - contact me</Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Ratio>
            </Link>
          </div>
          <div className='grid-item grid-item6'>
            <Link className='contact-link' to='/contact'>
              <Ratio className={'ratio-card'}>
                <div className='card'>
                  <div className='card-inner'>
                    <div className='card-front'>
                      <Image src={jpgSharp} fluid title='Sharp' alt='Sharp' width='650' height='366' />
                    </div>
                    <div className='card-back'>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={jpgSharp} />
                        <Card.Body>
                          <ul className={'list-unstyled p-2'}>
                            <li><FontAwesomeIcon icon={faBriefcase} color='#000' />Commercial</li>
                            <li><FontAwesomeIcon icon={faFileInvoice} color='#000' />Theme</li>
                          </ul>
                          <Link className='btn btn-dark' to='/contact'>More info - contact me</Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Ratio>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio
