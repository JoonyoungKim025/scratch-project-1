// import regularly as react
import React, { useState } from "react";
import NotLoggedIn from "./containers/notLoggedIn";
import LoggedIn from "./containers/loggedIn"

// Setting app as functional component



const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const set = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setLoggedIn(!loggedIn);
  }

  return (
    <div className="app_div">
      {loggedIn === false ?
      <NotLoggedIn set={set}/> : <LoggedIn {...setLoggedIn} />}
    </div>
  );
};

export default App;
