import React from "react"
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import {Container, Row, Col} from "reactstrap"
import homepageImg from "../assets/images/homepageImg.jpg"




function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Carousel/>
            <img className="img-fluid mt-5" src={homepageImg} alt="computer-coffee"/>
            <Container>
                <Row>
                    <Col className="text-center cursive mt-5">
                    <q>The user experience design of a product essentially lies between the intentions of the product and the characteristics of your user.</q> 
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: "auto", offset: 6 }}>
                    <p className="author mb-5 lead">– David Kadavy</p>                      
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage