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

  
  socket.on('disconnect', () => {
    console.log('Disconnected from client')
  })
})


app.use(express.static(publicPath))
// app.get('/', function(req,res){
//   res.status(200).send({
//     status: 'connection successful',
//     message: 'Friend\'s room',
//   })
// })
server.listen(port, function(){
  console.log(`app listening at ${port}`)
})
