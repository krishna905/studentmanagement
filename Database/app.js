const express = require('express');
const app = express();
const api = require('./api');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
app.use(cors());

const PORT = process.env.PORT || 5001;

app.use(express.json({ limit: '30mb', extended: true }));

app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use('/api', api);
app.use(express.static('static'));
app.use(morgan('dev'));
app.use(function (req, res) {
  const err = new Error('Not Found');
  err.status = 404;
  res.json(err);
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on('join_room', (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });
  socket.on('connect_error', (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id);
  });
});
//Mongo Db Connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/StudentsData', {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
  server.listen(PORT, function () {
    console.log('API Server Listening on port' + PORT + '!');
  });
});
