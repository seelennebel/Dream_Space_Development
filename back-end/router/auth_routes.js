const { Router } = require("express");
const controller = require("../controller/controller");

const router = Router();

router.get("/login");

router.get("/signup");

router.post("/login");

router.post("/signup", controller.signup_post);

module.exports = router;