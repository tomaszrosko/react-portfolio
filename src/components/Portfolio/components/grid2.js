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
                                        <ul className={'list-unstyled p-2'}>
                                            <li><FontAwesomeIcon icon={faReact} />React</li>
                                            <li><FontAwesomeIcon icon={faBootstrap} />React
                                                Bootstrap
                                            </li>
                                            <li><FontAwesomeIcon icon={faSass} />Sass</li>
                                            <li><FontAwesomeIcon icon={faEnvelope} />Email.js</li>
                                            <li><FontAwesomeIcon icon={faMap} />React-leaflet</li>
                                            <li><FontAwesomeIcon icon={faJs} />Java Script</li>
                                            <li><FontAwesomeIcon icon={faFileExport} />Json</li>
                                            <li><FontAwesomeIcon icon={faMobile} />Mobile First
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