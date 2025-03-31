import React from 'react';
import style from "./Toggle.module.css";

function Toggle({isEnabled, setIsEnabled, value}) {
  return (
    
    <div>
      <button
      onClick={() =>{
        const nextIsEnabled = !isEnabled;
        setIsEnabled(nextIsEnabled)
      }
      
      }
      
        type='button'
        role='switch'
        className={isEnabled ? style.wrapperActive : style.wrapper}>
        <span className={isEnabled ? style.ballActive : style.ball}></span>
      </button>
    </div>
  );
}

export default Toggle;
