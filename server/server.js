const express = require("express");
const app = express();
const PORT = 5000;

const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const api = require("./routes/api");
const cors = require("cors");
const server = http.createServer(app);

// requiring socket library
const socket = require("socket.io");
// apply socket IO to our server
const io = socket(server);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Socket Connection
io.on("connection", (socket) => {
  // when socket has connected we log New WS Connection
  console.log("New WS Connection...", socket.id);

  // only emits to the single/current client
  // this message should popup if it connects to the front end
  socket.on("newUser", () => {
    socket.emit("message", "Welcome new user!");
  });

  // emit to everyone except the user
  // Broadcast when a user connects
  socket.broadcast.emit("message", "A user has joined the chat!");

  // Listen for chat: receiving message.
  // Anonymous function deals with what to do with the received message
  socket.on("chatMessage", (msg) => {
    // send back message emitted by the client to everybody else
    // USE io.emit("message", msg); if you want to see your own msg
    socket.broadcast.emit("message", msg);
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    // tells everybody
    io.emit("message", " As user has left the chat");
  });
});

// Send that bad boy to api. Thanks for all that you do, api.
app.use("/api", api);

// Sometimes you're gonna have static files.
// During these times this router will serve them up.
// She's small but mighty.
app.use("/", express.static("../index.html"));

// Is the user lost? Silly user.
// Catch all error handler will tell them they lost af
app.use((req, res) => res.sendStatus(404));

// If you get an error, this is your guy.
// The one. The only. The Global Error Handler.
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: " An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
