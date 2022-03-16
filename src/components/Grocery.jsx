import React, { useState } from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";
import { v4 as uuid } from "uuid";
const Grocery = () => {
  const [item, setItem] = useState([]);

  const handleAdd = (title) => {
    const payLoad = {
      title,
      status: false,
      id: uuid(),
    };
    let newItemArray = [...item, payLoad];
    setItem(newItemArray);
    
    
  };

  return (
    <>
      <h1>Grocery</h1>
      <GroceryInput handleAdd={handleAdd} />
      <GroceryList item = {item} setItem = {setItem}/>
    </>
  );
};

export default Grocery;
