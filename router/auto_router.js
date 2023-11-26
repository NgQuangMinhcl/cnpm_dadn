const express = require("express");
const stat = require("../config/auto_stat");
const router = express.Router();

router.post("/fanon", (req, res) => {
  let temp = parseInt(req.body.temp, 10);
  stat.setTempOn(temp);
  res.status(200).json({ success: true, tempOn: stat.getTempOn() });
});

router.post("/fanoff", (req, res) => {
  let temp = parseInt(req.body.temp, 10);
  stat.setTempOff(temp);
  res.status(200).json({ success: true, tempOff: stat.getTempOff() });
});

router.post("/lighton", (req, res) => {
  let temp = parseInt(req.body.light, 10);
  stat.setLightOn(temp);
  res.status(200).json({ success: true, Light_On: stat.getLightOn() });
});

router.post("/lightoff", (req, res) => {
  let temp = parseInt(req.body.light, 10);
  stat.setLightOff(temp);
  res.status(200).json({ success: true, light_off: stat.getLightOff() });
});

module.exports = {
  router,
};
