import { truncate } from "fs/promises";
import React, { useState, useEffect } from "react";
const io = require("socket.io-client");

//set up our socket
const socket = io("http://localhost:5000");

interface data {
  message: string;
  username: string;
}

interface msgObj {
  message: string;
  fromClient: Boolean;
}

const ChatWindow: React.FC = () => {
  //piece of state holding a message
  const [data, setData] = useState<data>({
    message: "",
    username: "",
  });

  const [messagesArr, setMessagesArr] = useState<Array<msgObj>>([]);

  // add some sort of emitter that tells the backend that a client has connected
  useEffect(() => {
    socket.emit("newUser", "LALALALALALA");
  }, []);

  //on incoming message add to messageArr and render new messages
  useEffect(() => {
    socket.on("message", (payload: string) => {
      const msgObj = {
        message: payload,
        fromClient: false,
      }
      setMessagesArr([...messagesArr, msgObj]);
    });
    console.log(messagesArr);
  }, [messagesArr]);

  //event handler to update message in state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setData((prevState) => ({
      ...prevState,
      message: value,
    }));
  };

  //event handler to handle clicking the submit button (does nothing currently)
  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
   // send inputted message to server
    const msg = data.message;
    socket.emit("chatMessage", msg);
    const msgObj = {
      message: msg,
      fromClient: true,
    }
    setMessagesArr([...messagesArr, msgObj]);
    setData({
      message: "",
      username: "",
    })
    
  };

  //build an arrary of div elements to be rendered
  const renderArr = messagesArr.map((el) => {
    if (el.fromClient) {
      return <div className="clientMessage">fromClient: {el.message}</div>
    } else {
      return <div className="socketMessage">fromSocket: {el.message}</div>
    }
    
  });

  return (
    <div id="chatContainer">
      <div id="chatWindow">{renderArr}</div>
      <div id="inputContainer">
        <input
          type="text"
          id="messageInput"
          placeholder="Type a Message..."
          value={data.message}
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleSubmit} id="sendMessageBtn">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
