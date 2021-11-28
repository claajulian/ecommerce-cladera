import React from "react";
import CarWidget from "./CarWidget";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <CarWidget title="LOGO" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto" >
              <li className="nav-item">
                <CarWidget title="Home" />
              </li>
              <li className="nav-item">
                <CarWidget title="Hombre" />

              </li>
              <li className="nav-item">
                <CarWidget title="Niños" />

              </li>

              <li className="nav-item">
                <CarWidget icon="Carrito" />
              </li>

            </ul>

          </div>

        </div>
        <CarWidget />
      </nav>

    </div>
  )
}




export default NavBar;