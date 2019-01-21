import React from 'react';

const ColorInput = (props) => {
  return(
    <div>
      <label>{props.color}</label>
      <input type="range" 
             value={props.value}
             max='255'
             min='0'
             onChange={(event)=>{
               props.updateColor(props.color, event.target.value) }}/>

    </div>
  )
}

export default ColorInput;