import React, { useState } from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {

  const [darkMode, setDarkMode] = useState(false)

  function handleDarkMode() {
    setDarkMode(darkMode => !darkMode);
  }

  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header darkMode={darkMode} handleDarkMode={handleDarkMode}/>
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
