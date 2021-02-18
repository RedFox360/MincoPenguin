const server = require('express')();
const fs = require('fs')

server.get('/', (req, res) => res.send(fs.readFileSync('./website.html').toString()));

module.exports = () => {
  server.listen(3000);
}