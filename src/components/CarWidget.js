import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CarWidget = (props) => {
  return (
    <>

      {
        props.title === "LOGO" ?
          <Link to='/' class="navbar-brand">Tienda NBA</Link> :
          props.icon === "Carrito" ?
            <button><AiOutlineShoppingCart />
            </button>
            : props.title === "Home" ?

            < Link to="/" class="nav-link">{props.title}</Link> :
            < Link to={`/category/${props.title}`} class="nav-link">{props.title}</Link>





      }


    </>
  )
}

export default CarWidget;