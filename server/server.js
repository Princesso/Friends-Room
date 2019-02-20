const path = require('path');
const express = require('express');
const socketIO = require('socket.io')
const http = require('http');
const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 8086;
const app = express();
let server = http.createServer(app);
let io = socketIO(server);

io.on('connection', (socket) => {
  console.log('new Client connected');

  socket.on('createMessage', (message) => {
    console.log('create meaasage', message)
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    })
  })

  socket.on('disconnect', () => {
    console.log('Disconnected from client')
  })
})


app.use(express.static(publicPath))

server.listen(port, function(){
  console.log(`app listening at ${port}`)
})
