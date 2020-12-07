import React from "react"
import Hero from "../components/Hero"
import PortfolioCard from "../components/PortfolioCard"
import PortfolioContent from "../components/PortfolioContent"
import {Container, Row} from "reactstrap"

//map portfolio cards
function PortfolioPage(props) {
    const Content = PortfolioContent.map(content => <PortfolioCard key={content.id} cardImg={content.cardImg} cardTitle={content.cardTitle} cardText={content.cardText}/>)
    
    return (
        <div>
            <Hero title={props.title}/>
            <Container>
                <Row className="justify-content-between mb-5 ml-sm-5 pl-sm-5 ml-md-0 pl-md-0">
                    {Content} 
                </Row>
            </Container>
      
      </div>
    );
  }

export default PortfolioPage