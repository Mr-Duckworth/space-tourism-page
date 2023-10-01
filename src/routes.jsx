import React from "react";

import { createBrowserRouter, Navigate} from "react-router-dom";
  

import Home from "./pages/home";

import DestinationPage from "./pages/Destination-page";
import { DestinationData } from "./data";

import CrewPage from "./pages/crew-page";
import { CrewData } from "./data";

import TechnologyPage from "./pages/technology-page";
import { TechnologyData } from "./data";

import PageNotFound from "./pages/page-not-found;";

const Router = createBrowserRouter([
    {
        path: "/",
        element:  <Navigate to="home" />,
        errorElement: <PageNotFound />
    },
    {
        path:"home",
        element: <Home />
    },
    {
        path: "destination",
        element: <Navigate to="/destination/moon" />
    },
    {
        path: "destination/moon",
        element: <DestinationPage distance={DestinationData[0].distance} travel={DestinationData[0].travel} name={DestinationData[0].name} index={DestinationData[0].index} content={DestinationData[0].description} />
    },
    {
        path:"destination/mars",
        element: <DestinationPage distance={DestinationData[1].distance} travel={DestinationData[1].travel} name={DestinationData[1].name} index={DestinationData[1].index} content={DestinationData[1].description} />
    },
    {
        path: "destination/europa",
        element: <DestinationPage distance={DestinationData[2].distance} travel={DestinationData[2].travel} name={DestinationData[2].name} index={DestinationData[2].index} content={DestinationData[2].description} />
    },
    {
        path: "destination/titan",
        element: <DestinationPage distance={DestinationData[3].distance} travel={DestinationData[3].travel} name={DestinationData[3].name} index={DestinationData[3].index} content={DestinationData[3].description} />
    },
    {
        path:"crew",
        element: <Navigate to="/crew/douglas" />
    },
    {
        path:"/crew/douglas",
        element:<CrewPage role={CrewData[0].role} name={CrewData[0].name} index={CrewData[0].index} content={CrewData[0].bio} />

    },
    {
        path:"/crew/mark",
        element:<CrewPage role={CrewData[1].role} name={CrewData[1].name} index={CrewData[1].index} content={CrewData[1].bio} />

    },    {
        path:"/crew/victor",
        element:<CrewPage role={CrewData[2].role} name={CrewData[2].name} index={CrewData[2].index} content={CrewData[2].bio} />

    },    {
        path:"/crew/anousheh",
        element:<CrewPage role={CrewData[3].role} name={CrewData[3].name} index={CrewData[3].index} content={CrewData[3].bio} />

    },
    {
        path:"technology",
        element: <Navigate to="/technology/vehicle" />
    },
    {
        path:"/technology/vehicle",
        element: <TechnologyPage name={TechnologyData[0].name} index={TechnologyData[0].index} content={TechnologyData[0].description} />
    },
    {
        path:"/technology/spaceport",
        element: <TechnologyPage name={TechnologyData[1].name} index={TechnologyData[1].index} content={TechnologyData[1].description} />
    },
    {
        path:"/technology/capsule",
        element: <TechnologyPage name={TechnologyData[2].name} index={TechnologyData[2].index} content={TechnologyData[2].description} />
    }
    
])

export default Router