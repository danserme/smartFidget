import http from 'http';
import bodyParser from 'body-parser';
import five from 'johnny-five';
import express from 'express';
import { Server } from 'socket.io';
import createBoard from './utilities/create-board.js';
import { startClientServer } from './utilities/client-server.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

await createBoard({ repl: false });
const button = new five.Button(2)
// const potentiometer = new five.Sensor('A0')
// potentiometer.scale([0, 255])
const led = new five.Led(11)
button.on('press', () => {
  led.fadeOut()
})
button.on('up', () => {
  led.fadeIn(500)
})

io.on('connection', (socket) => {
  console.log('Socket connection established');

  button.on('press', () => {
    socket.emit('button', 'press')
  })

  button.on('up', () => {
    socket.emit('button', 'up')
  })

  // potentiometer.on('change', () => {
  //   socket.emit('potentiometer', potentiometer.value)
  // })
})

server.listen(PORT, () => {
  console.log('🤖 Express and Johnny-Five are up and running.');
  startClientServer();
});
