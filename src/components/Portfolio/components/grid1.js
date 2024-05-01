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
                                            <li><FontAwesomeIcon icon={faReact} color='#000'/>React</li>
                                            <li><FontAwesomeIcon icon={faBootstrap} color='#000'/>React Bootstrap</li>
                                            <li><FontAwesomeIcon icon={faSass} color='#000'/>Sass</li>
                                            <li><FontAwesomeIcon icon={faJs} color='#000'/>Java Script</li>
                                            <li><FontAwesomeIcon icon={faEnvelope} color='#000'/>Email.js</li>
                                            <li><FontAwesomeIcon icon={faFileExport} color='#000'/>Json</li>
                                            <li><FontAwesomeIcon icon={faMobile} color='#000'/>Mobile First</li>
                                            <li><FontAwesomeIcon icon={faSpinner} color='#000'/>Static content loading
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