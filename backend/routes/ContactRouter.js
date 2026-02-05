const express = require("express");
const router = express.Router();
const  ContactController  = require("../controllers/ContactController");

router.post("/", ContactController.create);
router.get("/", ContactController.getContacts);
router.delete("/:id", ContactController.deleteContact);

module.exports = router;
