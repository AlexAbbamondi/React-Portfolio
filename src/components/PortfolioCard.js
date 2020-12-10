import React from "react"
import {Card, CardImg, CardBody, CardText, CardTitle, Button} from "reactstrap"
import {FadeTransform, Fade, Stagger} from "react-animation-components"

//set portfolio card layout
function PortfolioCard(props) {
    return (

        <FadeTransform in transformProps={{exitTransform: "scale(.5) translateY(20%)"}}>
            <Card style={{ width: '18rem' }} className="mb-4 shadow">
                <CardImg variant="top" src={props.cardImg} />
                <CardBody className="text">
                    <CardTitle>{props.cardTitle}</CardTitle>
                    <CardText>
                        {props.cardText}
                    </CardText>
                    <Button variant="primary" className="button-portfolio">Go somewhere</Button>
                </CardBody>
            </Card>
        </FadeTransform>

    
    );
  }

export default PortfolioCard