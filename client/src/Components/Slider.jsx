import React from "react";
import {Carousel} from "react-bootstrap";
import image from '../assets/image.jpg'
import '../css/Slider.css'
import bmw_m4 from '../assets/cars/bmw_m4/forSlider.jpg'
import bmw_1 from '../assets/cars/bmw_1_2008/forSlider.jpg'
import mercedes from '../assets/cars/mercedes/forSlider.jpg'

export const Slider = () => (
    <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bmw_m4}
                    alt="Image"
                />
                <Carousel.Caption >
                    <h3>Bmw M4</h3>
                    <p>Нельзя относиться к машине как к своей девушке. <br/> Машине нужна любовь.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bmw_1}
                    alt="Image"
                />
                <Carousel.Caption className="carousel-caption-center">
                    <h3>Bmw M1</h3>
                    <p>А говорят любовь не купишь.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={mercedes}
                    alt="Image"
                />
                <Carousel.Caption >
                    <h3>Mercedes C240</h3>
                    <p>Это не масло подтекает, а моя машина метит свою территорию</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
)