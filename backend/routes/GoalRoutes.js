const express = require("express");

const route = require("express").Router();

route.get("/", (req, res) => {
  res.status(200).json({
    message: "it's get request",
  });
});
route.post("/", (req, res) => {
  res.status(200).json({
    message: "it's set request",
  });
});
route.put("/:id", (req, res) => {
  res.status(200).json({
    message: `it's update request ${req.params.id}`,
  });
});
route.delete("/:id", (req, res) => {
  res.status(200).json({
    message: `it's delete request ${req.params.id}`,
  });
});

module.exports = route;
