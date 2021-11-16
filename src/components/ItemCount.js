import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = (props) => {

    const [cantidad, setCantidad] = useState(1);

    const increment = () => {
        if (cantidad < props.max) setCantidad(cantidad + 1);
    }

    const decrement = () => {
        if(cantidad > 1) setCantidad(cantidad - 1);
    }

    const agregarCarrito = () => {
        console.log(`Se agregó al carrito ${cantidad} unidades`)
        alert(`Se agregó al carrito ${cantidad} unidades`)
    }

    return (
        <>
            <button type="button" class="btn btn-success" onClick={decrement}>-</button>
            {cantidad}
            <button type="button" class="btn btn-success" onClick={increment}>+</button>
            <button type="button" class="btn btn-primary" onClick={agregarCarrito}>Agregar al carrito</button>
            
            
        </>
    )
}

export default ItemCount;