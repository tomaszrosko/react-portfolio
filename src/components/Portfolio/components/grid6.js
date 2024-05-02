import {Link} from "react-router-dom";
import {Card, Ratio} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import jpgSharp from "../../../assets/img/sharp.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faFileInvoice} from "@fortawesome/free-solid-svg-icons";

function Grid6() {
    return (
        <div className='grid-item grid6'>
            <Link className='contact-link' to='/contact'>
                <Ratio className={'ratio-card'}>
                    <div className='card'>
                        <div className='card-inner'>
                            <div className='card-front'>
                                <Image src={jpgSharp} fluid title='Sharp' alt='Sharp' width='650'
                                       height='366'/>
                            </div>
                            <div className='card-back'>
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant='top' src={jpgSharp}/>
                                    <Card.Body>
                                        <ul className={'list-unstyled p-2'}>
                                            <li><FontAwesomeIcon icon={faBriefcase} />Commercial
                                            </li>
                                            <li><FontAwesomeIcon icon={faFileInvoice} />Theme
                                            </li>
                                        </ul>
                                        <Link className='btn btn-dark' to='/contact'>More info - contactme</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Ratio>
            </Link>
        </div>
    )
}

export default Grid6