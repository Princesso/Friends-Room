let socket = io()

socket.on('connect', () => {
  console.log('connected to server');

  socket.emit('createMessage', {
    from:'client is emmiting and server is listening',
    text: 'that\'s from me',
    createdAt: new Date(),
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
})

socket.on('newMessage', (message) => {
  console.log('newMessage',message)
})