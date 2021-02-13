const server = require('express')();

server.get('/', (req, res) => res.send('<html><h1 style="font-family:consolas">Minco Penguin Host Server</h1><p style="font-family:consolas">Minco Penguin is online!</p></html>'));

module.exports = () => {
  server.listen(3000);
}