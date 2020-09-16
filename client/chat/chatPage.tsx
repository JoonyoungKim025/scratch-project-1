import React from "react";
import chatWindow from './chatWindow';

interface chatState {
  message: string
}

const ChatPage: React.FC = () => {
  return (
    <div className="chat_page">
      <h1>Chat Page</h1>
      <ChatWindow/>
    </div>
  )
}

export default ChatPage;
