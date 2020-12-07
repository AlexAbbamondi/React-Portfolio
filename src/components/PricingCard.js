import React from "react"
import {Card, CardHeader, CardTitle, CardBody} from "reactstrap"

function PricingCard(props) {
    return(
        <Card className="mr-3 ml-3 mt-3">
            <CardHeader className="text-center text-white pricing-header ">{props.header}</CardHeader>
            <CardTitle className="pricing-title text-center my-auto display-4 p-2">
                ${props.price}
            </CardTitle>
            <CardBody>
                {props.description1}
                <br/>
                {props.description2}
                <br/>
                {props.description3}
                <br/>
                {props.description4}
            </CardBody>
        </Card>
    )
}

export default PricingCard