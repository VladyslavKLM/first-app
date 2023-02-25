import {Carousel} from "react-bootstrap";
import React, {Component} from 'react';



import MushroomsImg from '../assets/pexels-alleksana-6463665.jpg';
import OceanImg from '../assets/pexels-eugenia-remark-15647839.jpg';
import FieldImg from '../assets/pexels-luis-zambrano-15369376.jpg';

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={OceanImg}
                alt="Ocean"/>
                <Carousel.Caption>
                    <h3>Ocean image</h3>
                    <p> Далі, далі від душного міста! Серце прагне буять на просторі! Бачу здалека, – хвиля іскриста грає вільно по синьому морі.</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src={MushroomsImg}
                        alt="Mushrooms"/>
                    <Carousel.Caption>
                        <h3>Mushrooms image</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src={FieldImg}
                        alt="FieldImg"/>
                    <Carousel.Caption>
                        <h3>FieldImg image</h3>
                        <p>Lвввввввввввввввввввввввв?</p>
                    </Carousel.Caption>

                </Carousel.Item>

            </Carousel>
        );
    }
}

export default CarouselBoxHk;
