const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Tour not found' });
  }

  res.status(200).json({ status: 'success', data: { tour: tour } });
});

app.get('/api/v1/tours', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', results: tours.length, data: { tours: tours } });
});

app.post('/api/v1/tours', (req, res) => {
  const newId = tours[tours.length - 1].id + 1;

  const newTour = { ...req.body, id: newId };
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (error) => {
      if (error) {
        console.error('Error writing to file:', error);
      }

      res.status(201).json({ status: 'success', data: { tour: newTour } });
    }
  );
});

app.patch('/api/v1/tours/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Tour not found' });
  }

  res.status(200).json({ status: 'success', data: { tour: 'Updated tour' } });
});

app.delete('/api/v1/tours/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Tour not found' });
  }

  res.status(204).json({ status: 'success', data: null });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
