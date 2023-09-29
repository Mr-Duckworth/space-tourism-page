import React from "react";

import imageZero from "../assets/technology/image-launch-vehicle-portrait.jpg"
import imageOne from "../assets/technology/image-spaceport-portrait.jpg"
import imageTwo from "../assets/technology/image-space-capsule-portrait.jpg"

import LandscapeImageZero from "../assets/technology/image-launch-vehicle-landscape.jpg"
import LandscapeImageOne from "../assets/technology/image-spaceport-landscape.jpg"
import LandscapeImageTwo from "../assets/technology/image-space-capsule-landscape.jpg"

function TechnologyImage(props) {

    var w = window.innerWidth;

    let images;

    if (w > 1000) {
        images = [imageZero, imageOne, imageTwo];
    } else {
        images = [LandscapeImageZero, LandscapeImageOne, LandscapeImageTwo];
    }

    return (
        <img src={images[props.index]} className="technology-image" alt="space terminology"/>
    )

}

export default TechnologyImage;

 