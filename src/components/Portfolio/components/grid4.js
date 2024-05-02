import {Card, Ratio} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import jpgSandwiches from "../../../assets/img/sandwiches.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact, faSass} from "@fortawesome/free-brands-svg-icons";
import {faList, faXmark} from "@fortawesome/free-solid-svg-icons";

const urlSandwichesGitHub = 'https://github.com/tomaszrosko/reactjs-making-sandwich/tree/develop';

function Grid4() {
    return (
        <div className='grid-item grid4'>
            <a href={urlSandwichesGitHub} target='_blank'>
                <Ratio className={'ratio-card'}>
                    <div className='card'>
                        <div className='card-inner'>
                            <div className='card-front'>
                                <Image src={jpgSandwiches} fluid title='Sandwiches' alt='Sandwiches'
                                       width='650' height='366'/>
                            </div>
                            <div className='card-back'>
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant='top' src={jpgSandwiches}/>
                                    <Card.Body>
                                        <ul className={'list-unstyled p-2'}>
                                            <li><FontAwesomeIcon icon={faReact} />React</li>
                                            <li><FontAwesomeIcon icon={faSass} />Sass</li>
                                            <li><FontAwesomeIcon icon={faList} />Automatic order summary</li>
                                            <li><FontAwesomeIcon icon={faXmark} />Dynamicdeletion</li>
                                        </ul>
                                        <Card.Link target='_blank' className={'btn btn-dark'}
                                                   href={urlSandwichesGitHub}>Link Repo</Card.Link>
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

export default Grid4