const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const date_Schema = mongoose.Schema({
  date: {
    type: "string",
    required: [true, "Date is required"],
  },
  user_name: {
    type: "string",
    required: [true, "User name is required"],
  },
});

const Date_Schema = mongoose.model("Date", date_Schema);

module.exports = {
  Date_Schema,
};
