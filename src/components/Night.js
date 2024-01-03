import React, {useState} from "react"
export default function Night()
{
    const [mystyle,setStyle] = useState({
        color:'black',
        backgroundColor:'#FFFAFA'
    });
    const [text, setText] = useState("Enter the Text");
    const [btn, setbtn] = useState("DarkMode");

    const handleOnchange=(event)=>
    {
        setText(event.target.text);   
    }

    const toggleStyle=()=>
    {
        if(mystyle.color==='black')
        {
            setStyle({
                color:'white',
                backgroundColor:'#010B13'
            })
            setbtn('LightMode')
        }
        else
        {
            setStyle({
                color:'black',
                backgroundColor:'#ffe1e1'
            }) 
            setbtn('DarkMode')  
        }
    }
    return(
        <>
<div className="ontainer">
<textarea className="form-control my-4" id="mybox " rows="8" style={mystyle} value={text} onChange={handleOnchange}></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={toggleStyle}>{btn}</button>

</>
    )
}
