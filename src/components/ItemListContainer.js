import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import products from "../utils/data";
import { useParams } from "react-router";



const ItemListContainer = () => {
    
    const [text,setText] = useState([])
    const {idCategory} = useParams();

    
    
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
        getDatos(2000, products.filter(item =>{
            if(idCategory === undefined) return item;
            return item.category === idCategory
      
        }))
          
        .then((data)=> setText(data))
          .catch((err)=>{
            console.log(err);
            
          })
          .finally(()=> console.log("Se completó la carga."))
        
    },[text])

    return (
        <>
            <h1 className="parrafo2">Item List Container</h1>
           
           <ItemList catalogo={text}/>
            
        </>
    )
}

export default ItemListContainer;