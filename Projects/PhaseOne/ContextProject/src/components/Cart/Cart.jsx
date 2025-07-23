
import {  useCartContext } from '../../context/CartContext'

const Cart = () => {
  const cartCntxt = useCartContext();
  // console.log('cartCntxt',cartCntxt.items)

  const total = cartCntxt.items.reduce((a,b) =>  a + Number(b.price) ,0);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6">
      <h2 className="text-red-600 font-extrabold text-2xl text-center mb-6">Your Cart</h2>
      
      {cartCntxt.items.length === 0 ? (
        <p className="text-gray-500 text-center italic">Your cart is empty</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cartCntxt.items.map(item => (
            <li key={item.id} className="py-4 flex justify-between items-center">
              <span className="font-medium text-gray-800">{item.title}</span>
              <span className="text-green-600 font-semibold">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">Total</span>
          <span className="text-lg font-bold text-green-600">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default Cart 