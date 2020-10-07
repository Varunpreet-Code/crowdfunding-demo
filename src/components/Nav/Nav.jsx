import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";


function Nav() {

    
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/project">Project</Link>
            <Link to="/Login">Login</Link>
            <Link to="/SignUp">SignUp</Link>
            <Link to="/About">About</Link>        
            
        </nav>
    );
}

export default Nav;
