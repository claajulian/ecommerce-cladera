
import React, {useEffect, useState} from 'react'

const ItemList = ( props ) => {
  
  return (
    <>
      { 

       props.catalogo.map(elem =>

        
      <div key={elem.id}>
      <h2>{elem.titulo}</h2>
      <img src={elem.imageURL} alt="imagen"  />

      
      </div>
       
        )
      }
    </>
  )
}

export default ItemList
