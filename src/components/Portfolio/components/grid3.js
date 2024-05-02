import {Card, Ratio} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import jpgShopSample from "../../../assets/img/shopSample.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJs, faReact, faSass} from "@fortawesome/free-brands-svg-icons";
import svgTailwindCss from "../../../assets/img/svg/tailwindCssIcon.svg";

const urlShopSample = 'https://react-shop-sample.netlify.app/';
const urlShopSampleGitHub = 'https://github.com/tomaszrosko/react-shop-sample/tree/dev';

function Grid3() {
    return (
        <div className='grid-item grid3'>
            <a href={urlShopSample} target='_blank'>
                <Ratio className={'ratio-card'}>
                    <div className='card'>
                        <div className='card-inner'>
                            <div className='card-front'>
                                <Image src={jpgShopSample} fluid title='React shop sample'
                                       alt='React shop sample' width='650' height='366'/>
                            </div>
                            <div className='card-back'>
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant='top' src={jpgShopSample}/>
                                    <Card.Body>
                                        <ul className={'list-unstyled p-2'}>
                                            <li><FontAwesomeIcon icon={faReact} />React</li>
                                            <li><img src={svgTailwindCss} alt="Tailwind Css"title="Tailwind Css"/>Tailwind Css</li>
                                            <li><FontAwesomeIcon icon={faSass} />Sass</li>
                                            <li><FontAwesomeIcon icon={faJs} />Java Script</li>
                                        </ul>
                                        <Card.Link target='_blank' className={'btn btn-dark'}
                                                   href={urlShopSampleGitHub}>Link Repo</Card.Link>
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

export default Grid3