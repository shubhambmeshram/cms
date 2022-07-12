import React, {useEffect} from "react";
import { Container, Row, Col, Card, } from "react-bootstrap";
import opd from '../images/opd.svg';
import emergency from '../images/emergency.svg'
import "../App.css";
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';
import { NavLink } from "react-router-dom";

function Tiles() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);


  return (
    <div className="hello">
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col xs="12" lg="6" >
            <Card 
                data-aos={"zoom-in"}>
              <Card.Img
                variant="top"
                src={opd}
              />
              <Card.Body>
                <Card.Title>
                  {/* <a href="OpdDetails"> 
                    OPD
                  </a> */}
                  <NavLink to='/opd'>OPD</NavLink>
                  </Card.Title>
                {/* <Button variant="primary">OPD</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" lg="6" >
            <Card 
                data-aos={"zoom-in"}>
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
