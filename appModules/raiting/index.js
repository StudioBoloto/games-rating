const { config } = require("./config.js");
const makeRaitingFile = require("./raiting-file.js");
const { createRating, updateRating } = require("./calculations.js");

module.exports = {
  config,
  makeRaitingFile,
  createRating,
  updateRating,
};
