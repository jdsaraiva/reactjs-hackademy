import React, {Component} from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class Testimonials extends Component {

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
                <Col xs="0" sm="4"/>
                <Col xs="12" sm="4"><h2 style={testimonialsTitleStyle}>Students testimonials</h2></Col>
                <Col xs="0" sm="4"/>
            </Row>

            <Row className="title-padding">

                <Col xs="0" sm="1"></Col>

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

                <Col xs="0" sm="1"></Col>

            </Row>

            <Row className="title-padding">

                <Col xs="0" sm="1"></Col>

                <Col xs="6" sm="5">
                    <div style={testimonialStyle}>
                        <img style={testimonialPicture} src={require('./imgs/testimonial3.jpg')}  alt="Telmo Lourenço"/>

                        <h4 style={descriptionTitle}>Samantha Carbon</h4>
                        <span style={description}>So far a great delivery. Lots of detail and enjoying the pace. I am taking lots of notes and looking forward to fully completing. Great engagement.</span>
                        <br/>
                        <span style={description}>About:</span><a href="https://www.udemy.com/site2app/">Create an ECommerce website, App and connect them (extended)</a>
                    </div>
                </Col>

                <Col xs="6" sm="5">
                    <div style={testimonialStyle}>
                        <img style={testimonialPicture} src={require('./imgs/testimonial4.jpg')}  alt="Telmo Lourenço"/>

                        <h4 style={descriptionTitle}>Abdullah Maghram</h4>
                        <span style={description}>The instructor manage successfully to explain the course in a simple way.</span>
                        <br/>
                        <span style={description}>About:</span><a style={description} href="https://www.udemy.com/driving-experience-with-virtual-reality/">Car race with Virtual Reality</a>
                    </div>
                </Col>

                <Col xs="0" sm="1"></Col>

            </Row>

            <Row className="title-padding">

                <Col xs="0" sm="1"></Col>

                <Col xs="6" sm="5">
                    <div style={testimonialStyle}>
                        <img style={testimonialPicture} src={require('./imgs/testimonialDefault.jpg')}  alt="Telmo Lourenço"/>

                        <h4 style={descriptionTitle}>Gonzales</h4>
                        <span style={description}>I am a Leap newbie and this course allows me to give the first steps, practical and simple.</span>
                        <br/>
                        <span style={description}>About:</span><a href="https://www.udemy.com/labyrinth-game-in-unity-3d-with-leap-support/">Labyrinth game in Unity 3D with Leap support</a>
                    </div>
                </Col>

                <Col xs="6" sm="5">
                    <div style={testimonialStyle}>
                        <img style={testimonialPicture} src={require('./imgs/testimonialDefault.jpg')}  alt="Telmo Lourenço"/>

                        <h4 style={descriptionTitle}>HariGopan VV</h4>
                        <span style={description}>5 Stars</span>
                        <br/>
                        <span style={description}>About:</span><a style={description} href="https://www.udemy.com/mis-part1/">Ethical Hacking – Master Information Security</a>
                    </div>
                </Col>

                <Col xs="0" sm="1"></Col>

            </Row>

            <Row style={{textAlign:"center"}} >
                <Col xs="0" sm="4"/>
                <Col xs="12" sm="4"><span>All of these reviews, and more, are available <a style={{color:"white"}}  href="https://www.udemy.com/user/dessain-saraiva/">HERE.</a></span></Col>
                <Col xs="0" sm="4"/>
            </Row>

        </Container>
        )
    }
}

export default Testimonials


