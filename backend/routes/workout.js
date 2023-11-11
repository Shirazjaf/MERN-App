const express = require("express");

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//GET single workouts
router.get("/:id", getWorkout);

//POST a new workouts
router.post("/", createWorkout);

//DELETE a workouts
router.delete("/:id", deleteWorkout);

//UPDATE  a workouts
router.patch("/:id", updateWorkout);

module.exports = router;
