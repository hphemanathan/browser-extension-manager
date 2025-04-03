import React from 'react';

function ThemeButton({theme, setTheme, switchTheme}) {

  
  return (
    <div>
      <button onClick={switchTheme}>
        <img src='src/assets/icon-sun.svg' alt='Lighmode' />
      </button>
    </div>
  );
}

export default ThemeButton;
