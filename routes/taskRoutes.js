const express = require("express");
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");
const { verifyToken, checkPermission } = require("../middleware/authMiddleware");

router.post("/", verifyToken, checkPermission("create_task"), createTask);
router.get("/", verifyToken, checkPermission("view_task"), getTasks);
router.put("/:id", verifyToken, checkPermission("update_task"), updateTask);
router.delete("/:id", verifyToken, checkPermission("delete_task"), deleteTask);


module.exports = router;
