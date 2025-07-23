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
    <div className="flex flex-col justify-center items-center">
      <p className="font-extrabold text-4xl">Shopping cart</p>

      {data.map((data) => (
        <Item key={data.id} id={data.id} title={data.title} price={data.price} />
      ))}

      <Cart />
    </div>
  );
};

export default Shopping;
