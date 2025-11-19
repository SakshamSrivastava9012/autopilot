const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello! Deployed using Autopilot 🚀");
});

server.listen(80, () => console.log("App running on port 80"));
