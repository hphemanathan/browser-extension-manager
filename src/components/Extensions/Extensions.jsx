import React from 'react';
import data from "../../data.json" with {type:"json"}
import Extension from '../Extension/Extension';



function Extensions() {
  const [item, setItem] = React.useState(data)
  return <div>
    {
item.map(({logo, name, description, isActive})=> 
<Extension item={item} setItem={setItem} key={logo} logo={logo} name={name} description={description} isActive={isActive}/>
)
    }
  </div>;
}

export default Extensions;
