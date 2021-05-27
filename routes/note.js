const express = require("express");
const { getnotes, create, update, delnote} = require("../controllers/note");
const { verify } = require("../middleware/authmiddle");
const { notemiddle } = require("../middleware/notemiddle");
const router = express.Router();

router.param("id", notemiddle);

router.get("/getall", getnotes);
router.post("/create", verify, create);
router.put("/update/:id", verify, update);
router.delete("/delete/:id", verify, delnote);

module.exports = router;