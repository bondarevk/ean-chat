module.exports = {
  init: (io) => {

    console.log('Socket.IO Init.');

    io.on('connection', (socket) => {

      console.log('Client connected.');

      socket.emit('message', {
        id: 1,
        sender: 'Server',
        text: 'Hello, Client!'
      });

      socket.on('message', (message) => {
        console.log(message.text);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected.');
      });

    });

  }
};