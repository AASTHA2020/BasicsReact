import React, {useState} from 'react';
import './App.css';

function ThemeToggler() {
    // State to keep track of the current theme
    const [isDarkTheme, setIsDarkTheme] = useState(false);
  
    // Function to toggle the theme
    const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme);
    };
  
    return (
      <div className={`theme-container ${isDarkTheme ? 'dark' : 'light'}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <p>Try to toggle the theme and see the change!!!</p>
      </div>
    );
  }
  
  export default ThemeToggler;