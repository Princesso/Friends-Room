const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 8086;
const app = express();

app.use(express.static(publicPath))
// app.get('/', function(req,res){
//   res.status(200).send({
//     status: 'connection successful',
//     message: 'Friend\'s room',
//   })
// })
app.listen(port, function(){
  console.log(`app listening at ${port}`)
})
