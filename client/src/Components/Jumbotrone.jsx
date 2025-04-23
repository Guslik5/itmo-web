import React from "react";
import { Container } from "react-bootstrap";
import paralaxImages from "../assets/parallaxImage.jpg";
import styled from "styled-components";

const StyledContainer = styled.div`
    .jumbo {
        background: url("${paralaxImages}") no-repeat fixed bottom;
        background-size: cover;
        position: relative;
        z-index: -2;
        height: 400px;
        color: #efefef;
    }
    
    .overlay {
        position: absolute;
        background-color: #000;
        opacity: 0.7;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
    }
`;

const Jumbotrone = () => {
    return (
        <StyledContainer>
            <div className="jumbotron jumbotron-fluid jumbo p-5">
                <div className="overlay"></div>
                <Container>
                    <h1>Сar dealership</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                        aspernatur at blanditiis consequuntur, doloremque eveniet ex id illo
                        magnam nam, nemo nobis pariatur quaerat quam quas saepe veniam
                        voluptates. Explicabo?
                    </p>
                </Container>
            </div>
        </StyledContainer>
    );
};

export default Jumbotrone;
