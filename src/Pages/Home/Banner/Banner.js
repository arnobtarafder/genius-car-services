import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://github.com/ProgrammingHero1/genius-car-service-module-60/blob/main/src/images/banner/banner1.jpg?raw=true"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mr.Tom Flappy</h3>
            <p>I have fixed more than 1000 cars in my life. you can trust me.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://github.com/ProgrammingHero1/genius-car-service-module-60/blob/main/src/images/banner/banner2.jpg?raw=true"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Mr.John sharlock</h3>
            <p>I am mr.john. I am a senior car mechanic from genius car services.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://github.com/ProgrammingHero1/genius-car-service-module-60/blob/main/src/images/banner/banner3.jpg?raw=true"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Mr.Repair Cool</h3>
            <p>
              I've been here for more than 11 years. That means I am so experienced car mechanic.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;