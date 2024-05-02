import {Card, Ratio} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import jpgBlog from "../../../assets/img/blog.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBootstrap, faJs, faReact, faSass} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faFileExport, faMobile, faSpinner} from "@fortawesome/free-solid-svg-icons";

const urlBlog = 'https://www.magdalenarosko.pl';
const urlBlogGitHub = 'https://github.com/tomaszrosko/react-blog/tree/dev';

function Grid1() {
    return (
        <div className='grid-item grid1'>
            <a href={urlBlog} target='_blank'>
                <Ratio className={'ratio-card'}>
                    <div className='card'>
                        <div className='card-inner'>
                            <div className='card-front'>
                                <Image src={jpgBlog} fluid title='Blog' alt='Blog' width='650' height='366'/>
                            </div>
                            <div className='card-back'>
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant='top' src={jpgBlog}/>
                                    <Card.Body>
                                        <ul className={'list-unstyled p-2'}>
                                            <li><FontAwesomeIcon icon={faReact} />React</li>
                                            <li><FontAwesomeIcon icon={faBootstrap} />React Bootstrap</li>
                                            <li><FontAwesomeIcon icon={faSass} />Sass</li>
                                            <li><FontAwesomeIcon icon={faJs} />Java Script</li>
                                            <li><FontAwesomeIcon icon={faEnvelope} />Email.js</li>
                                            <li><FontAwesomeIcon icon={faFileExport} />Json</li>
                                            <li><FontAwesomeIcon icon={faMobile} />Mobile First</li>
                                            <li><FontAwesomeIcon icon={faSpinner} />Static content loading
                                            </li>
                                        </ul>
                                        <Card.Link target='_blank' className={'btn btn-dark'} href={urlBlogGitHub}>Link
                                            Repo</Card.Link>
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

export default Grid1