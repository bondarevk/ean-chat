module.exports = {
  init: (io) => {

    console.log('Socket.IO Init.');

    io.on('connection', (socket) => {

      console.log('Client connected.');

      setTimeout(() => {
        socket.emit('message', {
          id: 2,
          sender: 'Server',
          text: 'Whooop!'
        });
        console.log('Whoop!');
      }, 2000);

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