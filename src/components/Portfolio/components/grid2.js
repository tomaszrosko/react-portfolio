import {Card, Ratio} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import jpgPortfolio from "../../../assets/img/porfolio.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBootstrap, faJs, faReact, faSass} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faFileExport, faMap, faMobile} from "@fortawesome/free-solid-svg-icons";

const urlPortfolio = 'https://www.tomaszrosko.pl';
const urlPortfolioGitHub = 'https://github.com/tomaszrosko/react-portfolio/tree/dev';

function Grid2() {
    return (
        <div className='grid-item grid2'>
            <a href={urlPortfolio} target='_blank'>
                <Ratio className={'ratio-card'}>
                    <div className='card'>
                        <div className='card-inner'>
                            <div className='card-front'>
                                <Image src={jpgPortfolio} fluid title='Portfolio' alt='Potfolio' width='650'
                                       height='366'/>
                            </div>
                            <div className='card-back'>
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant='top' src={jpgPortfolio}/>
                                    <Card.Body>
                                        {/*<Card.Title>Card Title</Card.Title>*/}
                                        <ul className={'list-unstyled p-2'}>
                                            <li><FontAwesomeIcon icon={faReact} color='#000'/>React</li>
                                            <li><FontAwesomeIcon icon={faBootstrap} color='#000'/>React
                                                Bootstrap
                                            </li>
                                            <li><FontAwesomeIcon icon={faSass} color='#000'/>Sass</li>
                                            <li><FontAwesomeIcon icon={faEnvelope} color='#000'/>Email.js
                                            </li>
                                            <li><FontAwesomeIcon icon={faMap} color='#000'/>React-leaflet
                                            </li>
                                            <li><FontAwesomeIcon icon={faJs} color='#000'/>Java Script</li>
                                            <li><FontAwesomeIcon icon={faFileExport} color='#000'/>Json</li>
                                            <li><FontAwesomeIcon icon={faMobile} color='#000'/>Mobile First
                                            </li>
                                        </ul>
                                        <Card.Link target='_blank' className={'btn btn-dark'}
                                                   href={urlPortfolioGitHub}>Link Repo</Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Ratio>
            </a>
        </div>
    )
}

export default Grid2