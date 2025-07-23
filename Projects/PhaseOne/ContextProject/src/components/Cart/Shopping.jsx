import Item from "./Item";
import Cart from "./Cart";

const data = [
  {
    id: 1,
    title: "MacBook",
    price: "1200",
  },
  {
    id: 2,
    title: "Watch",
    price: "300",
  },
  {
    id: 3,
    title: "Book",
    price: "200",
  },
  {
    id: 4,
    title: "Bag",
    price: "50",
  },
];

const Shopping = () => {
return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-6">
        <h1 className="font-extrabold text-4xl text-gray-800 mb-8 tracking-tight">Shopping Cart</h1>
        
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="space-y-4">
                {data.map((data) => (
                    <Item key={data.id} id={data.id} title={data.title} price={data.price} />
                ))}
            </div>
        </div>
        
        <div className="w-full max-w-3xl">
            <Cart />
        </div>
    </div>
);
};

export default Shopping;
