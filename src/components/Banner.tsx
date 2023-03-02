import React from "react";
import { Col, Container, Row } from "reactstrap";


function Banner() {
    return(
        <Container className="text-center">
            <Row>
                <Col className="col-lg-6 mx-auto" >
                    <h1>Algorand Sports Oracle</h1>
                    <Container lead="true">
                        A free to use peer-2-peer sports betting odds service broadcast to the Algorand network.
                    </Container>
                </Col>
            </Row>
            <br />
        </Container>

    );

}

export default Banner;