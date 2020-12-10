import React from "react"
import CardInfo from "./CardInfo"
import{FadeTransform} from "react-animation-components"

function Card(props){
    return(
        <FadeTransform in transformProps={{exitTransform: "scale(.5) translateY(20%)"}}>
            <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
                <img className="g-card-image shadow" src={props.item.imgSrc} alt={props.item.imgSrc} />
                {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle}/>}
            </div>
        </FadeTransform>

    )
}

export default Card