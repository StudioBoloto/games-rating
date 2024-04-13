const path = require("path");

const PATH_TO_RAITING_FILE = path.resolve(
  __dirname,
  "../../dataset/raiting.json"
);

const WEIGHT = {
  gameplay: 2,
  design: 1,
  idea: 3,
};

module.exports = {
  config: {
    PATH_TO_RAITING_FILE,
    WEIGHT,
  },
};
