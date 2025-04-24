import React from "react";
import {Container} from "react-bootstrap";
import {OurCars} from "../Components/OurCars.jsx";

export const Cars = () => {
    return (
        <>
            <h1 className="m-0 d-flex justify-content-center p-5 bg-black text-white">Наши автомобили</h1>
            <OurCars/>
        </>
    )
}