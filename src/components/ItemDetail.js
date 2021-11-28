import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import { useEffect } from 'react' 
import ItemCount from './ItemCount'


const ItemDetail = (props) => {

    
    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    console.log(props.content);

    return (


        <>
        {

            props.content.length !== 0 ? 


        
            <div className="detalles__container">
                
      <h2>{props.content.titulo}</h2>
      <div className="detalles__imagen">
      <img src={props.content.imageURL} alt="imagen"  />
      </div>
      <p> {props.content.stock} </p>
      <p>{props.content.precio} por unidad </p>
      <p>{props.content.description}</p>

        
      <ItemCount max={props.content.stock} initial={props.content.initial}/>
            </div>

            
        

        : <p>Cargando...</p>


       }
        </>
    )
}

export default ItemDetail
