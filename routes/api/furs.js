const router = require("express").Router();
// const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

router.route('/', function (req, res) {
  res.send('Birds home page')
  console.log('test router 1')
})

router.post('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;
