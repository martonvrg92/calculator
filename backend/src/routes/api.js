const express = require('express');
const fs = require('fs');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true}));

function memorySave (req, res) {
  let number = req.body.data
  if (number != null) {
  fs.writeFile('../memory.txt', number, "utf8", (err) => {
    if(err) {
      console.log('error', err)
    }
    res.status(200).json("saved to memory")
  })
  }
}

function memoryRecall(req, res) {
  fs.readFile('../memory.txt', 'utf8', (err, data) => {
    if (err) console.log(err)
    res.status(200).json({data: data})
  })
}

router.post('/memory-save', memorySave)
router.get('/memory-recall', memoryRecall)
module.exports = router;