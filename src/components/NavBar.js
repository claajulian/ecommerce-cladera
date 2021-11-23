import React from "react";
import CarWidget from "./CarWidget";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from 'react-router-dom';



const NavBar = () => {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to ='/'><a class="navbar-brand" href="#">Tienda NBA</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto" >
        <li className="nav-item">   
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
         <a className="nav-link" href="#">Hombre</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Niños</a>
        </li>
        
      </ul>
      
    </div>
  
  </div>
  <CarWidget/>  
</nav>
 
</div>
    )
}




export default NavBar;