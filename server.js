const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const iocore = require('./server/socket/iocore');
const api = require('./server/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);
const io = require('socket.io')(server);
iocore.init(io);
server.listen(port, '0.0.0.0', () => console.log(`Server running on 0.0.0.0:${port}`));