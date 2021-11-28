import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {

    

    return (
        <>
        <div key={props.props.id}>
      <h2>{props.props.titulo}</h2>
      <img src={props.props.imageURL} alt="imagen"  />

      <Link to={`/Item/${props.props.id}`}>Mostrar detalles</Link>

      
        </div>
        </>
    )
}
 
export default Item
