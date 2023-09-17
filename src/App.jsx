import React from "react";
import { Route, Routes} from "react-router-dom";


import NavBar from "./components/Navbar/navBar";
import Home from "./Home/home";
import Destination from "./Destination/destination";
import Crew from "./Crew/crew";
import Technology from "./Technology/technology";


function App() {

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/home" element={<Home /> } />
                <Route path="destination" element={<Destination />} />
                <Route path="crew" element={<Crew />  } />
                <Route path="technology" element={<Technology />} />
            </Routes>
        </div>
    )
}

export default App;