import React from "react"
import {useSpring, animated} from "react-spring"

function CardInfo(props) {
   const style = useSpring({opacity: 1, from: {opacity: 0}})

    return(
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title lead font-weight-bold">{props.title}</p>
            <p className="g-card-sub-title text-white lead font-weight-normal">{props.subTitle}</p>
        </animated.div>
    )
}

export default CardInfo