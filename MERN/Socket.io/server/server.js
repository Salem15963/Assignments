const express = require('express');
const app = express();

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);
const io = require('socket.io')(server, { cors: true });


io.on("connection",Socket =>{
    console.log(Socket.id);
    Socket.on("event_from_client", data =>{
    Socket.broadcast.emit("send_data_to_all_other_clients", data);
    });
});