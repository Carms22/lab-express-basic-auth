const router = require("express").Router()
const miscController = require("../controllers/misc.controller");
const authController = require("../controllers/auth.controller");
const usersController = require("../controllers/users.controller");
const authMiddlewares = require("../middlewares/authMiddleware");

//MISC
router.get("/" , miscController.home)

//USER
router.get("/profile",authMiddlewares.isAuthenticated,  usersController.profile)

//AUTH
router.get("/register", authController.register)
router.post("/register", authController.doRegister)

router.get("/login", authMiddlewares.isNotAuthenticated, authController.login)
router.post("/login", authController.doLogin)

router.get("/logout", authController.logout)


module.exports = router;