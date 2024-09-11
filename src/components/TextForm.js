import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleClClick=()=>{
        let newText='';
        setText(newText)
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const[text,setText]=useState("")
    return(
        <>
 <div className='container' style={{color:props.mode===`dark`?`white`:`#042743`}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode===`dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`#042743`}} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleClClick}>Clear</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy</button>
    </div>
</div>
<div className='container my-2'style={{color:props.mode===`dark`?`white`:`#042743`}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read </p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
  )
}
