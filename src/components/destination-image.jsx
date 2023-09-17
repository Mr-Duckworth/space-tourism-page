import React from "react";

import imageZero from "../assets/destination/image-moon.png"
import imageOne from "../assets/destination/image-mars.png"
import imageTwo from "../assets/destination/image-europa.png"
import imageThree from "../assets/destination/image-titan.png"

function DestinationImage(props) {

    const images = [imageZero, imageOne, imageTwo, imageThree]

    return (
        <img src={images[props.index]} className="destination-image" alt="A planet"/>
    )

}

export default DestinationImage;

