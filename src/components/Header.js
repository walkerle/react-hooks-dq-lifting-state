import React from "react";
import Menu from "./Menu";

function Header({darkMode, handleDarkMode}) {

  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu handleDarkMode={handleDarkMode} />
      </div>
    </div>
  );
}

export default Header;
