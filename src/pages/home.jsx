import React from "react";

import "../styles/home.scss"

import NavBar from "../components/Navbar/navBar";
import Circle from "../components/circle";
import BodyOfText from "../components/bodyOfText";


function Home() {

    const homeContent = "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"

    return (
        <div className="homepage">
            <NavBar />
            <div className="content">
                <div className="text-group">
                    <h5>SO, YOU WANT TO TRAVEL TO</h5>
                    <h1>SPACE</h1>
                    <BodyOfText content={homeContent} />
                </div>
                <Circle />
            </div>
        </div>
        )

}

export default Home;