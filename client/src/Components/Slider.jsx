import React from "react";
import {Carousel} from "react-bootstrap";
import image from '../assets/image.jpg'
import '../css/Slider.css'

export const Slider = () => (
    <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="Image"
                />
                <Carousel.Caption>
                    <h3>Super ultra 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="Image"
                />
                <Carousel.Caption className="carousel-caption-center">
                    <h3>Super ultra 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="Image"
                />
                <Carousel.Caption>
                    <h3>Super ultra 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
)