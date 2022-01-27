const express = require("express");
const router = express.Router();

const stuffController = require("../controllers/stuff");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config");

router.post("/", auth, multer, stuffController.createThing);

router.get("/", auth, stuffController.getAllStuffs);

router.put("/:id", auth, multer, stuffController.modifyStuff);

router.delete("/:id", auth, stuffController.deleteStuff);

router.get("/:id", auth, stuffController.getStuff);

module.exports = router;
