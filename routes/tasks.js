const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
  editTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTasks);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);
// .put(editTask);

module.exports = router;
