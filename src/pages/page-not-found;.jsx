import React from "react";
import { Link } from "react-router-dom";


function PageNotFound() {

    return (
        <div className="error-page">
            <div className="error-content">
                <h1 >
                    404
                </h1>
                <h5>
                    Sorry, we were unable to find this page
                </h5>
                <Link to={"/"} >GO HOME</Link>
            </div>
        </div>
    )
}

export default PageNotFound;