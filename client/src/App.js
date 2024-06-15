import React from "react";
import Login from "./pages/Login";
import DarkModeToggle from "./atoms/DarkModeToggle";

const App = () => {
  return (
    <div className="App">
      <DarkModeToggle />
      <Login />
    </div>
  );
};

export default App;
