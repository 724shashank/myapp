import React, { useState } from 'react'
export default function Txt_trans(props) {
    const handleUpclick= ()=>{
        const newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Upper Case","Success")
          
      }
      const handleOnchange = (event)=>{
          setText(event.target.value);
          
          
      }
      const handleLpclick= ()=>{
        const newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","Success")
          
      }
      const [text, setText] = useState("Enter the text");
     return (
    <div>
   
<div className="mb-3">
  <label htmlFor="myBox" className="form-label" ><h1>{props.heading}</h1></label>
  <textarea className="form-control" id="mybox " rows="8" value={text} onChange={handleOnchange}></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary" onClick={handleLpclick}>Convert to Lowercase</button>
</div>
   
)
}