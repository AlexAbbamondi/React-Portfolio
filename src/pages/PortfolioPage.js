import React from "react"
import Hero from "../components/Hero"
import PortfolioCard from "../components/PortfolioCard"
import PortfolioContent from "../components/PortfolioContent"
import {Container, Row, Col} from "reactstrap"

function PortfolioPage(props) {
    const Content = PortfolioContent.map(content => <PortfolioCard key={content.id} cardImg={content.cardImg} cardTitle={content.cardTitle} cardText={content.cardText}/>)
    return (
        <div>
            <Hero title={props.title}/>
            <Container>
                <Row className="justify-content-between">
                    {Content} 
                </Row>
            </Container>
      
      </div>
    );
  }

export default PortfolioPage