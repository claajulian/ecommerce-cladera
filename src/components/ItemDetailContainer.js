import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import data from '../utils/data';
import { useParams } from "react-router";




const ItemDetailContainer = () => {

    const [text,setText] = useState([])
    const {idItem} = useParams()

    
    let is_ok = true;

    let getDatos = (time,task) => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            if (is_ok) {
                    resolve(task)
                    
                } else {
                    reject("Error")
                }
            },time)
    
        })
    }
    
    useEffect(()=>{
        // getDatos(2000, products)
        getDatos(2000,data.find(datoEncontrado => datoEncontrado.id === parseInt(idItem )))
          
        .then((res)=>setText(res))
          .catch((err)=>{
            console.log(err);
            
          })
          .finally(()=> console.log("Se completó la carga."))
        
    },[])

    

    return (
        <>
            <ItemDetail content={text} />
            
        </>
    )
}

export default ItemDetailContainer
