const { Router } = require("express");
const controller = require("../controller/auth_controller");

const router = Router();

router.get("/login", controller.login_get);

router.get("/signup", controller.signup_get);

router.post("/login", controller.login_post);

router.post("/signup", controller.signup_post);

module.exports = router;