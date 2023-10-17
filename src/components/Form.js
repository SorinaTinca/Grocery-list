import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, bought: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);

    onAddItems(newItem);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>What do you need to buy?</h2>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button className="btn-add">Add</button>
    </form>
  );
}
