import React, { useState } from "react";
import Chat from "../chat/chatPage";
import Search from "../searchResult/search";

const LoggedIn: React.FC = () => {
  const [searchOrChat, setSearchOrChat] = useState<boolean>(true);
  const chatToggle = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setSearchOrChat(!searchOrChat);
  };

  return (
    <div>
      <button onClick={chatToggle}>Chat</button>
      {searchOrChat ? <Search /> : <Chat />}
    </div>
  );
};

export default LoggedIn;
