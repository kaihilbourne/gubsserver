const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {}
});

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

let id = 0;

io.on('connection', (socket) => {
  id += 1;
  let uid = "user" + id.toString();
  socket.on('chat message', (msg) => {
    io.emit('chat message',msg,uid)
  });
});

server.listen(4000, () => {
  console.log('server running at http://localhost:4000');
});