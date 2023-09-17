import React from "react";

import imageZero from "../assets/technology/image-launch-vehicle-portrait.jpg"
import imageOne from "../assets/technology/image-spaceport-portrait.jpg"
import imageTwo from "../assets/technology/image-space-capsule-portrait.jpg"

function TechnologyImage(props) {

    const images = [imageZero, imageOne, imageTwo]

    return (
        <img src={images[props.index]} className="technology-image" alt="space terminology"/>
    )

}

export default TechnologyImage;

 