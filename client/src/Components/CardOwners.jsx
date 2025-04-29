import React from "react";
import {Button, Card} from "react-bootstrap";


export default function ({image, title, description}) {

    function handleClickCardBmw(model) {
        alert(`top ${model}`);
    }

    return (
        <>
            <Card >
                <Card.Img variant="bottom" src={image} />
                <Card.Body className="px-4">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                    </Card.Text>
                    <Button variant="dark" onClick={() => handleClickCardBmw(`${title}`)}>Learn more</Button>
                </Card.Body>
            </Card>
        </>
    )
}