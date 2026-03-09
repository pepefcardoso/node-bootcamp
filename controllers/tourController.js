const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res
    .status(200)
    .json({ status: 'success', results: tours.length, data: { tours: tours } });
};

exports.getTour = (req, res) => {
  console.log(req.requestTime);
  const id = parseInt(req.params.id, 10);
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Tour not found' });
  }

  res.status(200).json({ status: 'success', data: { tour: tour } });
};

exports.createTour = (req, res) => {
  console.log(req.requestTime);
  const newId = tours[tours.length - 1].id + 1;

  const newTour = { ...req.body, id: newId };
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (error) => {
      if (error) {
        console.error('Error writing to file:', error);
      }

      res.status(201).json({ status: 'success', data: { tour: newTour } });
    }
  );
};

exports.updateTour = (req, res) => {
  console.log(req.requestTime);
  const id = parseInt(req.params.id, 10);
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Tour not found' });
  }

  res.status(200).json({ status: 'success', data: { tour: 'Updated tour' } });
};

exports.deleteTour = (req, res) => {
  console.log(req.requestTime);
  const id = parseInt(req.params.id, 10);
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Tour not found' });
  }

  res.status(204).json({ status: 'success', data: null });
};


