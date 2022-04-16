const asyncHandler = require("express-async-handler");

// getGoal
// GET
// http://localhost:5000/api/goal
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "it's get request",
  });
});

// getGoal
// GET
// http://localhost:5000/api/goal
const setGoal = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "it's set request",
  });
});

// getGoal
// GET
// http://localhost:5000/api/goal
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `it's update request ${req.params.id}`,
  });
});

// getGoal
// GET
// http://localhost:5000/api/goal
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `it's delete request ${req.params.id}`,
  });
});

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };
