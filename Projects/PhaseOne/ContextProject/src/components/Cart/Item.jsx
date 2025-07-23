import React from "react";
import { useContext } from "react";
import { CartContext, useCartContext } from "../../context/CartContext";

const Item = (props) => {

    const getContext = useCartContext(); // useContext(CartContext); same but I made modular to context
    const {items,setItems} = useCartContext(); // destructured

    console.log('CartContext', getContext);
  return (
    <div className="border-2 p-4 m-4 rounded-xl">
      <h2>Title : {props.title}</h2>
      <p>Price : ${props.price}</p>
      <button className="border-2 p-2 m-1 mt-3 rounded-2xl text-white bg-green-500 hover:bg-amber-400"
      onClick={() => { setItems([...items,{title:props.title, price: props.price, id:props.id}])}} >Add to cart</button>
    </div>
  );
};

export default Item;
