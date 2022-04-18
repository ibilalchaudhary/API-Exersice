const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
// getGoal
// GET
// http://localhost:5000/api/goal
const getGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.find();
  res.status(200).json(goal);
});

// getGoal
// GET
// http://localhost:5000/api/goal
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add value here");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// getGoal
// no body is gona know
// http://localhost:5000/api/goal
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("please update");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// getGoal
// GET
// http://localhost:5000/api/goal
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("didn't delete");
  }
  await goal.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };
