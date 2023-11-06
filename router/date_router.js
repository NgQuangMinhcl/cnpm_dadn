const express = require("express");
const { Date_Schema } = require("../model/date_model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Date_Schema.find();
    res.status(200).json({ success: true, data: data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = {
  router,
};
