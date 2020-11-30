import React from "react"
import {Card, CardImg, CardBody, CardText, CardTitle, Button} from "reactstrap"


function PortfolioCard(props) {
    return (
        <Card style={{ width: '18rem' }} className="mb-4">
            <CardImg variant="top" src={props.cardImg} />
            <CardBody>
            <CardTitle>{props.cardTitle}</CardTitle>
                <CardText>
                    {props.cardText}
                </CardText>
                <Button variant="primary">Go somewhere</Button>
            </CardBody>
        </Card>
    
    );
  }

export default PortfolioCard