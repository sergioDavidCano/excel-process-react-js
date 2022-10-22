import './iconDarkMode.scss';
import React, { useState } from 'react'
import { WiDaySunny, WiMoonAltWaningCrescent4 } from "react-icons/wi";
export const IconDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <label htmlFor="night-light-checkbox" className="night-light-label">
      <input
        onClick={(e) => handleDarkMode(e)}
        type="checkbox"
        id="night-light-checkbox"
      />
      <span className="night-light-ball"></span>
      <div className="container-sub-icon">
        <WiMoonAltWaningCrescent4
          className={`icon-mode ${darkMode ? " active-mode" : " "} `}
        />
        <WiDaySunny
          className={`icon-mode ${darkMode ? " active-mode" : " "}`}
        />
      </div>
    </label>
  )
}
