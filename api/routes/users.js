const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.post("/", UsersController.Create);
router.get("/search", UsersController.Search);
router.get("/find/:id", UsersController.Find);

module.exports = router;
