import React from "react"
import {Card, CardImg, CardBody, CardText, CardTitle, Button} from "reactstrap"

//set portfolio card layout
function PortfolioCard(props) {
    return (
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
    
    );
  }

export default PortfolioCard