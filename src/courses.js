import React, {Component} from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import ImageToggleOnMouseOver from './imageTogglerOnMouseOver.js'

class Courses extends Component {

    render(){

        return (

            <Container>

                <Row className="row-padding">
                    <Col xs="12" sm="4" >
                        <ImageToggleOnMouseOver
                            alt="Information Security"
                            primaryImage="imgs/thumb2-bw.jpg"
                            secundaryImage="imgs/thumb2.jpg"
                        />
                        <h1 className="title">Information Security</h1>
                        <span className="description">Get to know some of the ins and outs of cyber security methods and practices</span>
                    </Col>
                    <Col xs="12" sm="4">
                        <ImageToggleOnMouseOver
                            alt="Web Development"
                            primaryImage="imgs/thumb3-bw.jpg"
                            secundaryImage="imgs/thumb3.jpg"
                        />
                        <h1 className="title">Web Development</h1>
                        <span className="description">Build responsive WordPress websites with tons of features and a App that fetches the site data using Ionic framework</span>
                    </Col>
                    <Col xs="12" sm="4">
                        <ImageToggleOnMouseOver
                            alt="Virtual Reality"
                            primaryImage="imgs/thumb1-bw.jpg"
                            secundaryImage="imgs/thumb1.jpg"
                        />
                        <h1 className="title">Virtual Reality</h1>
                        <span className="description">Build from scratch different Virtual Reality projects and get the knowledge to build your own.</span>
                    </Col>

                    <Col xs="12">
                        <figure className="separator"/>
                        <span className="description">Our goal is to share the passion for IT with the world, you'll find practical lessons based on real life situation that will help you out even if you are a student, professional our just curious to learn something new.</span>
                    </Col>
                </Row>

            </Container>

        )
    }
}

export default Courses