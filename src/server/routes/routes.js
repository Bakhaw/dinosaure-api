const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const Dino = require('../model/dino');

// Get
router.get('/', (req, res) => {
Dino.find((err, dinos) => {
  if (err) {
    res.send(err);
  }
  res.json(dinos)
})
})

// Post
router.post('/add', bodyParser.urlencoded({extended: true}), (req, res) => {
  const newDino = new Dino(req.body);
  newDino.save((err, dino) => {
    if (err) {
      res.send(err)
    }
    res.redirect('http://localhost:3000');
  })
});

// Update
router.post('/:id/edit', bodyParser.urlencoded({extended: true}), (req, res) => {
  Dino.findByIdAndUpdate(req.params.id, req.body, (err, prevState) => {
    if (err) {
      res.send(err)
    }
    res.json({'Success': `${prevState.name} has been updated`})
  })
})

// Delete
router.get('/:id/delete', (req, res) => {
  Dino.findByIdAndRemove(req.params.id, (err, deleted) => {
    if (err) {
      res.send(err);
    }
    res.json({'Success': `${deleted.name} has been deleted`})
  })
})

module.exports = router;
