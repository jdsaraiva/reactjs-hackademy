import React, {Component} from 'react';
import './App.css';
import { Container, Row, Col,Card, CardImg, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';

class FindOurCourses extends Component {

    render(){

        return(

            <Container className="ourCourses" fluid="true">

                <h2 className="section-title title-padding">find our courses</h2>

                <Row>
                    <Col xs="12" sm="1" ></Col>

                    <Col xs="12" sm="10" >

                        <CardDeck>

                            <Card>
                                <CardImg top width="100%"  src={require('./imgs/GDPR.jpg')}  alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><a href="http://www.udemy.com/data-anonymization-gdpr/">Data anonymization and GDPR</a></CardTitle>
                                    <CardText>Data anonymization is a type of information sanitisation whose intent is privacy protection. It is the process of either encrypting or removing personally identifiable information from data sets, so that the people whom the data describe remain anonymous.</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardImg top width="100%"  src={require('./imgs/WordPressPlugins.jpg')}  alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><a href="https://www.udemy.com/create-3-official-wordpress-plugins/learn/">How I created 3 official WordPress plugins</a></CardTitle>
                                    <CardText>Learn how to create real live production plugins from scratch and boost your WordPress knowledge</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardImg top width="100%"  src={require('./imgs/createVirtualRealityExperiences.jpg')}  alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><a href="http://www.udemy.com/your-vr-experiences/">Create your Virtual Reality experiences (extended)</a></CardTitle>
                                    <CardText>Build from scratch 4 different Virtual Reality projects and get the knowledge to build your own.</CardText>
                                </CardBody>
                            </Card>

                        </CardDeck>

                    </Col>
                    <Col xs="12" sm="1" ></Col>
                </Row>

                <Row>
                    <Col xs="12" sm="1" ></Col>

                    <Col xs="12" sm="10" >

                        <CardDeck>

                            <Card>
                                <CardImg top width="100%"  src={require('./imgs/USBinjection.jpg')}  alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><a href="https://www.udemy.com/ethical-hacking-usb-keystroke-injection-with-digispark/">Ethical Hacking - USB Keystroke injection with DigiSpark</a></CardTitle>
                                    <CardText>Automate your processes or perform a stealth pen-test assessment with this new kind of technical approach.</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardImg top width="100%"  src={require('./imgs/createEcommerceWebsite.jpg')}  alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><a href="http://www.udemy.com/site2app/">Create an ECommerce website, App and connect them (extended)</a></CardTitle>
                                    <CardText>Build a responsive WordPress website with tons of features and a App that fetches the site data using Ionic framework</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardImg top width="100%"  src={require('./imgs/labyrinthGame.jpeg')}  alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><a href="http://www.udemy.com/labyrinth-game-in-unity-3d-with-leap-support/">Labyrinth game in Unity 3D with Leap support</a></CardTitle>
                                    <CardText>Make a digital version of the labyrinth game in Unity 3D with Leap Motion device support for an immersive interaction.</CardText>
                                </CardBody>
                            </Card>

                        </CardDeck>

                    </Col>
                    <Col xs="12" sm="1" ></Col>
                </Row>

                <Row>
                    <Col xs="12" sm="1" ></Col>

                    <Col xs="12" sm="10" >

                        <CardDeck>

                            <Card>
                                <CardImg top width="100%"  src={require('./imgs/masterInformationSecurity.jpg')}  alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><a href="http://www.udemy.com/mis-part1/">Ethical Hacking - Master Information Security</a></CardTitle>
                                    <CardText>Get to know some of the ins and outs of cyber security methods and practices</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardImg top width="100%"  src={require('./imgs/carRaceVirtualReality.jpg')}  alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><a href="http://www.udemy.com/driving-experience-with-virtual-reality/">Car race with Virtual Reality</a></CardTitle>
                                    <CardText>Build your virtual reality driving experience with unity 3D.</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardImg top width="100%"  src={require('./imgs/WordPressGutenberg.jpg')}  alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><a href="http://www.udemy.com/wp-gutenberg/">WordPress Gutenberg</a></CardTitle>
                                    <CardText>Understand how WordPress’s Gutenberg works and how to create your custom blocks</CardText>
                                </CardBody>
                            </Card>

                        </CardDeck>

                    </Col>
                    <Col xs="12" sm="1" ></Col>
                </Row>

            </Container>

        )
    }
}

export default FindOurCourses


