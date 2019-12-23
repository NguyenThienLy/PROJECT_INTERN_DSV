import * as React from "react";
import { Carousel } from 'antd';

import "./introCarousel.scss";
import { ItemCarousel } from '../index'

export function IntroCarousel({ }) {
    return (
        <Carousel>
            <div>
                <ItemCarousel />
            </div>
            <div>
                <ItemCarousel />
            </div>
            <div>
                <ItemCarousel />
            </div>
            <div>
                <ItemCarousel />
            </div>
        </Carousel>
    );
}

export default IntroCarousel
