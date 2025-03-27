import React from 'react';
import style from "./Toggle.module.css";

function Toggle() {
  return <div>
    <button type='button' role='switch' className={style.wrapper}>
<span className={style.ball}>

</span>
    </button>
  </div>;
}

export default Toggle;
