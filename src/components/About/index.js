import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import boulderMe from '../../assets/cover/me-on-boulder.JPG';
import skyline3 from '../../assets/cover/austin-sky-2.jpg';


function About() {
    return (
        <section className="about">
            <div>
                <h1 className="title">About Me</h1>
                <Image src={skyline3} alt="Austin skyline at night from a paddleboard" fluid />
            </div>
            <br />
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                    <Image src={boulderMe} className="cover-pic2" alt="Me on top of a boulder" rounded fluid/>
                    </Col>
                    <Col>
                        <div className="short-bio" style={{textAlign: "center", margin: "5%", fontSize: "23px", paddingTop: "21%"}}>
                            <p>
                                My name is Jose Molina and I am currently a 4th grade teacher living in Austin. I've done it for 6 years and love working with my students.
                                I've had my eye on being a web developer for a while now, and I have finally taken that leap of faith into this wild world.
                                It's been a lot to take in, but it is something I look forward to on a daily basis. It's scary, but exciting to jump into this 
                                new world, and I honestly can't wait.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;