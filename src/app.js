const express = require('express');
const app = express();

// for parsing application/json
app.use(express.json());

// Define your routes here, for example:
app.post('/api/signup', (req, res) => {
  // Handle signup
});

app.post('/api/login', (req, res) => {
  // Handle login
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
