// const WebSocket = require('ws') //  need to npm install

// const wss = new WebSocket.Server({ port: 8082 });

// // event type (wss refers to actual server, ws is object(single connection) )
// wss.on("connection", ws => {
//   console.log("New client connected!");

//   ws.on("message", data => {
//     console.log(`Client has sent us: ${data}`);

//     ws.send(data.toUpperCase());
//   })

//   ws.on("close", () => {
//     console.log("Client has disconnected!");
//   });
// });
// // codes above give us websocket server


