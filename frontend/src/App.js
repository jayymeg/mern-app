import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Fetch the API message
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error(err);
        setMessage("Error fetching message");
      });
  }, []);

  return (
    <div>
      <h1>MERN App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

