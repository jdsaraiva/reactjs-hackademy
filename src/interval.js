import React, {Component} from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class Interval extends Component {

    render(){

        return(

            <Container fluid="true">

                <Row className="row-padding">
                    <Col xs="0" sm="4"/>
                    <Col xs="12" sm="4">
                            <h2>More than 6.400 students</h2>
                            <figure className="separator"></figure>
                            <h2>Average rating of 4.2</h2> (December 2019)
                    </Col>
                    <Col xs="0" sm="4"/>
                </Row>

            </Container>

        )
    }
}

export default Interval


