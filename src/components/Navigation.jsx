import React from "react";
import { NavLink,Link } from "react-router-dom";


function Navigation(){

    return(
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" role="navigation" aria-label="main navigation">
            <div className = "container">
                
                <a className="navbar-brand" >
                Davi<strong>dA</strong>zenda
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className = "nav-item">
                        <Link className="nav-link" to="/">
                            Counter
                        </Link>
                        </li>
                        <li className = "nav-item">
                        <Link className="nav-link" to = "/calculator">
                            Calculator
                        </Link>
                        </li>
                        <li className = "nav-item">
                        <Link className="nav-link" to = "/todo">
                            ToDo
                        </Link>
                        </li>
                        {/* <li className = "nav-item end">
                            <button class="btn btn-outline-success" type="submit">Sign Up</button>
                        </li>
                        <li className = "nav-item end">
                            <button class="btn btn-outline-success" type="submit">Log In</button>   
                        </li> */}
                    </ul>
                </div>
               
                
                    
                
            </div>
            </nav>
        </div>
    
        
    )
    
}
export default Navigation;