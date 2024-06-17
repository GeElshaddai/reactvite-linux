import React, { useState } from "react";
import { Sun, SunFill } from "react-bootstrap-icons";

import { Button } from "react-bootstrap";

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-bs-theme", darkMode ? "light" : "dark");
  };
  return (
    <div className={`ThemeToggler ${darkMode ? "theme-dark" : "theme-light"}`}>
      <Button variant="dark" onClick={toggleTheme}>
        {darkMode ? <Sun /> : <SunFill />}
      </Button>
    </div>
  );
};
export default ThemeToggler;
