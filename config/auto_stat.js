let temp_on = -99;
let temp_off = -99;

let light_on = -99;
let light_off = -99;

const setTempOn = (data) => {
  temp_on = data;
};

const setTempOff = (data) => {
  temp_off = data;
};

const getTempOn = () => {
  return temp_on;
};

const getTempOff = () => {
  return temp_off;
};

const getLightOn = () => {
  return light_on;
};

const getLightOff = () => {
  return light_off;
};

const setLightOn = (data) => {
  light_on = data;
};

const setLightOff = (data) => {
  light_off = data;
};
module.exports = {
  setTempOn,
  setTempOff,
  getTempOn,
  getTempOff,
  setLightOn,
  setLightOff,
  getLightOn,
  getLightOff,
};
