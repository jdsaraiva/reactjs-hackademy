import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import {Col, Container, Row} from "reactstrap";

class Footer extends Component {

    render(){

        return (

            <Container fluid="true">

                <Row className="row-padding">
                    <Col xs="6" sm="4"/>
                    <Col xs="6" sm="4"><span>Copyright © 2020</span></Col>
                    <Col xs="6" sm="4"/>
                </Row>

            </Container>

        )
    }
}

export default Footer