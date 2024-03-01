const net = require("net");

const PORT = 6379;
const HOST_NAME = "127.0.0.1";

const server = net.createServer((connection) => {
  connection.on("data", (data) => {
    connection.write("+PONG\r\n");
  });
});

server.listen(PORT, HOST_NAME);
