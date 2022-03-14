const express = require("express");
const dotev = require("dotenv");
const port = process.env.PORT || 5000;

const app = express();

app.get("/api/goal/", (req, res) => {
  res.status(200).json({
    message: "hello there",
  });
});

app.listen(port, () => {
  console.log(`server is started on ${port}`);
});
