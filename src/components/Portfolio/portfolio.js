import './portfolio.scss';
import {Container,} from 'react-bootstrap';
import Grid1 from "./components/grid1";
import Grid2 from "./components/grid2";
import Grid3 from "./components/grid3";
import Grid4 from "./components/grid4";
import Grid5 from "./components/grid5";
import Grid6 from "./components/grid6";


function Portfolio() {
    return (
        <section className={'portfolio'}>
            <Container>
                <div className='grid'>
                    <Grid1/>
                    <Grid2/>
                    <Grid3/>
                    <Grid4/>
                    <Grid5/>
                    <Grid6/>
                </div>
            </Container>
        </section>
    )
}

export default Portfolio
