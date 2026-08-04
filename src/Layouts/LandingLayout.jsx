//this is the Landing Layout page : it includes the overall layout of Landing Page.
// which component should place at which place wil decide this Layout.

import { Outlet } from "react-router-dom";
import NavBar from "../Components/Layout/Navbar";

function LandingLayout(){
    return(
        <>
        <NavBar/>
        <Outlet/>
        </>
    )
}

export default LandingLayout;