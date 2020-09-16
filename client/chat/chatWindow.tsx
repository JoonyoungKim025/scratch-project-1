import React, {useState} from 'react';


interface message {
  content: string
}

const ChatWindow: React.FC = () => {

  //piece of state holding a message
  const [message, setMessage] = useState<message>({
    content: ""
  });
  
  //event handler to update message in state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMessage({
      content: value
    });
  };

  //event handler to handle clicking the submit button (does nothing currently)
  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <div id="chatContainer">
      <div id="chatWindow"></div>
      <div id="inputContainer">
        <input type="text" id="messageInput" placeholder="Type a Message..." value={message.content} onChange={handleChange} ></input>
        <button type="submit" onClick={handleSubmit} id="sendMessageBtn">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;