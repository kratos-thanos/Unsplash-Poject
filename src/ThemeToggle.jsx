import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { FaRegMoon } from "react-icons/fa6";
import { MdWbSunny } from "react-icons/md";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <FaRegMoon className="toggle-icon" />
        ) : (
          <MdWbSunny className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
