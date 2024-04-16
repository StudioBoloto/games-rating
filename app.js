const http = require("http");
const mainRouteController = require("./controllers/main.js");
const defaultRouteController = require("./controllers/default.js");
const gameRouteController = require("./controllers/game.js");
const voteRouteController = require("./controllers/vote.js");

const server = http.createServer((req, res) => {
  const { method, url } = req;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
      break;
  }
});

const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
