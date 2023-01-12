import React, { useState } from "react";

function Menu({handleDarkMode}) {
  const [checked, setChecked] = useState(false);
  
  const handleChange = () => {
    setChecked((checked) => !checked)
    handleDarkMode();
  }

  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={checked}
          onChange={handleChange}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
