const express    = require('express');
const bodyParser = require('body-parser');
const multer     = require('multer');
const path       = require('path');
const router     = express.Router();

const Dino       = require('../model/dino');

// Multer
// where and how the files/images should be saved.
const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, path.resolve('public', 'uploads'));
  },
  filename: (request, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

// Get
router.get('/', (req, res) => {
Dino.find((err, dinos) => {
  if (err) {
    res.send(err);
  }
  res.json(dinos)
})
})

// Get par Id
router.get('/:id', (req, res) => {
  Dino.findById(req.params.id, (err, dino) => {
    if (err) {
      res.send(err)
    }
    res.json(dino)
  })
})

// Post
router.post('/add', upload.single('image'), (req, res) => {
  const newDino = new Dino(req.body);
  newDino.image = "uploads/" + req.file.filename;

  newDino.save((err, dino) => {
    if(err) {res.send(err)}
    res.redirect("http://localhost:3000");
  });

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
router.post('/:id/delete', (req, res) => {
  Dino.findByIdAndRemove(req.params.id, (err, deleted) => {
    if (err) {
      res.send(err);
    }
    res.redirect('http://localhost:3000');
  })
})

module.exports = router;
