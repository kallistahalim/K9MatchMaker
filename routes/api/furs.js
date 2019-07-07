const router = require("express").Router();
const dogControllers = require("../../controllers/dogControllers");

// Matches with "/api/furs"
router.route("/")
  .get(dogControllers.findAll)
  .post(dogControllers.create);


// Matches with "/api/furs/:id"
router
  .route("/:id")
  .get(dogControllers.findById)
  .put(dogControllers.update)
  .delete(dogControllers.remove);

module.exports = router;