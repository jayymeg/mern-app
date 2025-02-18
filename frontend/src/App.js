import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://your-ec2-ip:5000/api/items";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios.get(API_URL).then(res => setItems(res.data));
  }, []);

  const addItem = () => {
    axios.post(API_URL, { name: input }).then(res => {
      setItems([...items, res.data]);
      setInput("");
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>MERN Todo App</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, i) => <li key={i}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;

