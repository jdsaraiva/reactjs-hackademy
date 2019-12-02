import React, {Component} from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class findOurCourses extends Component {

    render(){

        // theses styles are only used here
        const testimonialsTitleStyle = {
            textAlign: 'center',
            textTransform: 'uppercase',
            border: '3px solid white',
            padding: '10px',
        };

        const testimonialStyle = {
            textAlign: 'left',
            padding: '5px',
        };

        const testimonialPicture = {
            float:'left',
            borderRadius: '50%',
            width: '80px',
            marginRight:'20px'
        }

        let descriptionTitle  = {
            fontWeight:'bold',
            fontSize:'18px',
            marginBottom:0
        }

        let description  = {
            marginLeft:'0px',
            fontSize:'14px'
        }

        return(

            <Container className="testimonials" fluid="true">

                <Row className="row-padding">
                    <Col xs="6" sm="4"/>
                    <Col xs="6" sm="4"><h2 style={testimonialsTitleStyle}>Students testimonials</h2></Col>
                    <Col xs="6" sm="4"/>
                </Row>

                <Row className="title-padding">

                    <Col xs="6" sm="1"></Col>

                    <Col xs="6" sm="5">
                        <div style={testimonialStyle}>
                            <img style={testimonialPicture} src={require('./imgs/testimonial1.jpg')}  alt="Telmo Lourenço"/>

                            <h4 style={descriptionTitle}>Telmo Lourenço</h4>
                            <span style={description}>I liked very much this course, now I can understand how i can use GPDR.</span>
                            <br/>
                            <span style={description}>About:</span><a style={description} href="https://www.udemy.com/data-anonymization-gdpr/">Data anonymization and GDPR</a>
                        </div>
                    </Col>

                    <Col xs="6" sm="5">
                        <div style={testimonialStyle}>
                            <img style={testimonialPicture} src={require('./imgs/testimonial2.jpg')}  alt="Telmo Lourenço"/>

                            <h4 style={descriptionTitle}>Joel Serrano</h4>
                            <span style={description}>Valuable information, Clear explanations, Engaging delivery, Helpful practice activities, Accurate course description, Knowledgeable instructor</span>
                            <br/>
                            <span style={description}>About:</span><a href="https://www.udemy.com/site2app/">Create an ECommerce website, App and connect them (extended)</a>
                        </div>
                    </Col>

                    <Col xs="6" sm="1"></Col>

                </Row>

            </Container>
        )
    }
}

export default findOurCourses


