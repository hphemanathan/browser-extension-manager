import React from 'react';
import data from "../../data.json" with {type:"json"}
import Extension from '../Extension/Extension';



function Extensions() {
  return <div>
    {
data.map(({logo, name, description, isActive})=> 
<Extension key={logo} logo={logo} name={name} description={description} isActive={isActive}/>
)
    }
  </div>;
}

export default Extensions;
