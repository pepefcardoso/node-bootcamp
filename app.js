const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Welcome to the Express server!', app: 'Roamora' });
});

app.post('/', (req, res) => {
  res.status(200).json({ message: 'POST request received!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
