const express = require('express');
const cors = require('cors');
const app = express();
const { v4: uuidv4 } = require('uuid');
app.use(cors());

const PORT = process.env.PORT || 3000;

// the image sizes are too large, this would be optimized in production
const TOURS = [
  {
    title: 'Amazing Trip',
    price: Math.floor(Math.random() * 1000) + 1,
    desc: 'This is an amazing trip',
    img:
      'https://static.iris.net.co/sostenibilidad/upload/images/2020/3/31/49480_1.jpg',
    id: uuidv4(),
  },
  {
    title: 'Amazing Trip2',
    price: Math.floor(Math.random() * 1000) + 1,
    desc: 'This is an amazing trip2',
    img:
      'https://lp-cms-production.imgix.net/2019-06/GettyImages-171675281_full.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1280',
    id: uuidv4(),
  },
];

app.get('/api/v1', (req, res, next) => {
  if (TOURS.length === 0) {
    res.status(400).send('Not Found');
  }
  res.send(TOURS);
  res.end();
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
