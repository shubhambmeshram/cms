import React from "react";
import { Container, Row, Col, Card, } from "react-bootstrap";
import opd from '../images/opd.svg'
import emergency from '../images/emergency.svg'

function Tiles() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col xs="12" lg="6" >
            <Card>
              <Card.Img
                variant="top"
                src={opd}
              />
              <Card.Body>
                <Card.Title>OPD</Card.Title>
                {/* <Button variant="primary">OPD</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" lg="6" >
            <Card >
              <Card.Img
                variant="top"
                src={emergency}
              />
              <Card.Body>
                <Card.Title>EMERGENCY</Card.Title>
                {/* <Button variant="primary">EMERGENCY</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tiles;
