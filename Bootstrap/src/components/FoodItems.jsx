import React, { useState } from "react";
import ListItems from "./ListItems";
import ErrorMessage from "./ErrorMessage";
import Container from "./Container";
import InputFood from "./InputFood";

function Hfoods() {
  // let foodItems = [/*"Daal", "Roti", "Salad", "Fruits", "Aamla", "Milk"*/];
  
  // let [textShow, setTextShow] = useState();
  let [foodItems, setfoodItems] = useState([
    "Daal",
    "Rupsa",
    "Roti",
  ]);
  
  let handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems , newFoodItem];
      setfoodItems(newItems);
    }
  };
  // let emptyMsg =
  //   foodItems.length === 0 ? (
  //     <h3>I'm Still Hungry...!! get me foods</h3>
  //   ) : null;

  return (
    <>
      <Container>
        {/* {emptyMsg} */}
        <ErrorMessage item={foodItems} />
        {/* <p>{textShow}</p> */}
        <ListItems item={foodItems} />
      </Container>

      <Container>
        <InputFood handleOnKeyDown={handleOnKeyDown} />
      </Container>
    </>
  );
}

export default Hfoods;
