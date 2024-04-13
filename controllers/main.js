const staticFile = require("../appModules/http-utils/static-file");
const { getData, endpoints } = require("../appModules/api");
const { config, makeRaitingFile } = require("../appModules/raiting/index.js");

async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.games);
  await makeRaitingFile(config.PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;
