const mongoose = require("mongoose");

const goalModel = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalModel);
