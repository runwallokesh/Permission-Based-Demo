const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/userController");
const { verifyToken, checkPermission } = require("../middleware/authMiddleware");

router.get("/", verifyToken, checkPermission("view_users"), getAllUsers);

module.exports = router;