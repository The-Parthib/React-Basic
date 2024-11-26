import { useState } from "react";
import List from "./Item";

const ListItems = ({ item }) => {
//   let foodItems = ["Daal", "Roti", "Salad", "Fruits", "Aamla", "Milk", "Rupsa"]; //no need as we pass values through props

  let [activeItems , setActiveItems] = useState([]);

  let onBuyButton = (item ) =>{
    let newItems = [...activeItems , item];
    setActiveItems(newItems);
  }

  return (
    <ul className="list-group">
      {item.map((items) => {
        return (
          <List
            key={items}
            fooditem={items}
            bought={activeItems.includes(items)}
            handle={() => onBuyButton(items)}
          />
        );
      })}
    </ul>
  );
};

export default ListItems;
