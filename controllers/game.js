const fs = require("fs").promises;
const { config } = require("../appModules/raiting/config");
const { getRandomGame } = require("../appModules/api");

async function gameRouteController(res) {
  try {
    const ratingFile = await fs.readFile(config.PATH_TO_RAITING_FILE);
    const data = JSON.parse(ratingFile);
    const game = getRandomGame(data);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(game));
  } catch (err) {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}

module.exports = gameRouteController;
