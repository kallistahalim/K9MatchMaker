const router = require("express").Router();
const dogControllers = require("../../controllers/dogControllers");
const db = require("../../models/doginfo");


// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  db.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/:id', (req, res) => {
  db.findById(req.params.id)
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/', (req, res) => {
  if(req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded.'})
  }

  const file = req.files.file;


  file.mv(`././client/public/uploads/${file.name}`, err => {
    if(err) {
      console.log(err); 
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
  });

  console.log(req.files.name)

  const newItem = new db({
    name: req.files.name,
    gender : req.files.gender
  });

  newItem.save().then(item => res.json(item));
});

// Upload Endpoint
router.post('/upload', (req, res) => {
  
});


router.put('/update/:id', function (req, res) {
  db.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true },function (err, response) {
    if (err) {
      console.log(err);
    }
    res.send(response);

  });
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', (req, res) => {
  db.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;