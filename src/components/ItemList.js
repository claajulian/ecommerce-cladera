
import React, {useEffect, useState} from 'react'
import Item from './Item'

const ItemList = ( props ) => {
  
  return (
    <>
      { 
        props.catalogo.legth !== 0 && 
       props.catalogo.map(elem =>

        
     
      <Item props={elem}/>

     
       
        )
      }
    </>
  )
}

export default ItemList
