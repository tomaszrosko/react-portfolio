import {Link} from "react-router-dom";
import {Card, Ratio} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import jpgVestfrost from "../../../assets/img/vestfrost.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faFileInvoice} from "@fortawesome/free-solid-svg-icons";

function Grid5() {
    return (
        <div className='grid-item grid5'>
            <Link className='contact-link' to='/contact'>
                <Ratio className={'ratio-card'}>
                    <div className='card'>
                        <div className='card-inner'>
                            <div className='card-front'>
                                <Image src={jpgVestfrost} fluid title='Vestfrost' alt='Vestfrost'
                                       width='650' height='366'/>
                            </div>
                            <div className='card-back'>
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant='top' src={jpgVestfrost}/>
                                    <Card.Body>
                                        <ul className={'list-unstyled p-2'}>
                                            <li><FontAwesomeIcon icon={faBriefcase} color='#000'/>Commercial
                                            </li>
                                            <li><FontAwesomeIcon icon={faFileInvoice} color='#000'/>Theme
                                            </li>
                                        </ul>
                                        <Link className='btn btn-dark' to='/contact'>More info - contact
                                            me</Link>
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

export default Grid5