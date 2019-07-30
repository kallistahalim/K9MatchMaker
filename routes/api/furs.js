const router = require("express").Router();
const dogControllers = require("../../controllers/dogControllers");
const db = require("../../models/doginfo");

// // 
// // Matches with "/api/furs"
// router.route("/")
//   .get(dogControllers.findAll)
//   .post(dogControllers.create);


// // Matches with "/api/furs/:id"
// router
//   .route("/:id")
//   .get(dogControllers.findById)
//   .put(dogControllers.update)
//   .delete(dogControllers.remove);

// module.exports = router;

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
  const newItem = new db({
    name: req.body.name,
    gender : req.body.gender
  });

  newItem.save().then(item => res.json(item));
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