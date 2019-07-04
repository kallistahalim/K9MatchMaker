const router = require("express").Router();
const dogController = require("../../controllers/dogControllers");

// Matches with "/api/dogs"
router.route("/dogs")
  .get(dogController.findAll)
  .post(dogController.create);

// Matches with "/api/dogs/:id"
router
  .route("/:id")
  .get(dogController.findById)
  .put(dogController.update)
  .delete(dogController.remove);

module.exports = router;