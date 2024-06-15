const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET","POST"]
  }
});

app.use(cors());

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

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
    io.emit('chat message',msg+uid);
    console.log(msg);
  });
});

server.listen(4000, () => {
  console.log('server running at http://localhost:4000');
});