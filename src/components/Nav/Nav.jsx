import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import "./Nav.css";


function Nav() {

    
    return(
        <nav id = "text-box">
            <Link className ="nav-text" to="/">Home</Link>


            <Link  className = "nav-text" to="/project">Project</Link>

            <Link className = "nav-text" to="/Login">Login</Link>
            
            <Link className = "nav-text" to="/Signup">Sign Up</Link>
                  
            
        </nav>
    );
}

export default Nav;
