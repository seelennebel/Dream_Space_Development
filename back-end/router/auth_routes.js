const { Router } = require("express");
const controller = require("../controller/auth_controller");
const cors = require("cors");

const router = Router();

router.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

router.post("/login", controller.login_post);

router.post("/signup", controller.signup_post);

router.get('/users', controller.getAllUsers);


module.exports = router;