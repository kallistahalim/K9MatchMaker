const router = require("express").Router();
const dogControllers = require("../../controllers/dogControllers");
const db = require("../../models/doginfo");
const multer = require ("multer");


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});



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
router.post('/', upload.single('image'), (req, res) => {
  const newItem = new db({
    image: req.file.path,
    name: req.body.name,
    gender : req.body.gender
  });

  newItem.img.data = fs.readFileSync(req.files.userPhoto.path);
  newItem.img.contentType = image/png;


  newItem.save().then(item => res.json(item));
});

// Upload Endpoint
router.post('/upload', (req, res) => {
  if(req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded.'})
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if(err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
  });
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