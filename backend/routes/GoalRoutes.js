const express = require("express");
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/RoutesController");

const route = require("express").Router();

route.get("/", getGoal);

route.post("/", setGoal);

route.put("/:id", updateGoal);

route.delete("/:id", deleteGoal);

module.exports = route;
