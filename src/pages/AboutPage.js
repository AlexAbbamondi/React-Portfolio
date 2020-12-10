import React from "react"
import Hero from "../components/Hero"
import {Container, Col, Row} from "reactstrap"
import developer from "../assets/images/developer.jpg"
import designer from "../assets/images/designer.jpg"
import owner from "../assets/images/owner.jpg"
import {FadeTransform} from "react-animation-components"

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-justify lead" md={8}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Col>
                </Row>
                <FadeTransform in transformProps={{exitTransform: "scale(.5) translateY(20%)"}}>
                    <Row className="justify-content-between pt-5 mb-5">
                        <Col className="pb-2">
                            <img src={developer} alt="developer" width="250" height="300" className="rounded mx-auto d-block mb-2 shadow"/>
                            <h2 className="text-center lead font-weight-bold">John</h2>
                            <q className="text-center lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q>
                        </Col>
                        <Col className="pb-2">
                            <img src={designer} alt="designer" width="250" height="300" className="rounded mx-auto d-block mb-2 shadow"/>
                            <h2 className="text-center lead font-weight-bold">Sara</h2>
                            <q className="text-center lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q>
                        </Col>
                        <Col className="pb-2">
                            <img src={owner} alt="owner" width="250" height="300" className="rounded mx-auto d-block mb-2 shadow"/>
                            <h2 className="text-center lead font-weight-bold">Mike</h2>
                            <q className="text-center lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q>
                        </Col>
                    </Row>
                </FadeTransform>
            </Container>
        </div>
    )
}

export default AboutPage