import React from "react";
import Login from "./pages/Login";
import DarkModeToggle from "./atoms/DarkModeToggle";

import Message from "./atoms/Message";
import Chats from "./pages/Chat/Chats";
const App = () => {
  return (
    <div className="App">
      {/* <DarkModeToggle />
      <Login /> */}
      <Chats/>
      {/* <Message/> */}
    </div>
  );
};

export default App;
