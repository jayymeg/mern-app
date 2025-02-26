const express = require('express');
const app = express();

// Define a simple API route
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from Express API!" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});

