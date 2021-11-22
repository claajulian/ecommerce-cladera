import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import { useEffect } from 'react'

const Item = (props) => {

    

    return (
        <>
        <div key={props.props.id}>
      <h2>{props.props.titulo}</h2>
      <img src={props.props.imageURL} alt="imagen"  />

      <button id={`mostrarDetalle${props.props.id}`}>Mostrar detalles</button>

      <ItemDetailContainer data={props.props} />
        </div>
        </>
    )
}

export default Item
