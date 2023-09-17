import React from "react";

import imageZero from "../assets/crew/image-douglas-hurley.png"
import imageOne from "../assets/crew/image-mark-shuttleworth.png"
import imageTwo from "../assets/crew/image-victor-glover.png"
import imageThree from "../assets/crew/image-anousheh-ansari.png"



function CrewImage(props) {

    const images = [imageZero, imageOne, imageTwo, imageThree]

    return (
        <img src={images[props.index]} className="crew-image" alt="A crew member"/>
    )

}

export default CrewImage;