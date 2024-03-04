import React, { useState } from "react";

function Array() {
  const [array, setArray] = useState([]);

  function handleAdd() {
    const addItem = document.getElementById("addItemInput").value;
    document.getElementById("addItemInput").value = "";

    setArray((a) => [...a, addItem]);
  }

  function handleRemove(index) {
    setArray(array.filter((_, i) => i !== index));
  }
  return (
    <div
      className="flex flex-col
      gap-10 border-zinc-100 p-20 text-zinc-50 justify-center items-center h-full bg-zinc-800"
    >
      <h1 className="text-6xl font-bold">Array</h1>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemove(index)}>X</button>
          </li>
        ))}
      </ul>
      <input className="text-zinc-900" type="text" id="addItemInput" />
      <button onClick={handleAdd}>+ Add Item</button>
    </div>
  );
}

export default Array;
