
import {  useCartContext } from '../../context/CartContext'

const Cart = () => {
  const cartCntxt = useCartContext();
  // console.log('cartCntxt',cartCntxt.items)

  const total = cartCntxt.items.reduce((a,b) =>  a + Number(b.price) ,0);

  return (
    <div>
        <center><h2 className='text-red-600 font-extrabold text-2xl'>Your Cart</h2></center>

        {
          cartCntxt && cartCntxt.items.map(item =>(
            <li key={item.id}>{item.title } - ${ item.price}</li>
          ))
        }
        
        <h5 className='font-bold'>Total bill : $ {total} </h5>
    </div>
  )
}

export default Cart 