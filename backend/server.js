const express = require("express");
const dotev = require("dotenv");
const { urlencoded } = require("express");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use("/api/goal", require("./routes/GoalRoutes"));

app.listen(port, () => {
  console.log(`server is started on ${port}`);
});
