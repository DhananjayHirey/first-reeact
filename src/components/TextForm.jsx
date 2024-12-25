import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("Your text was successfully converted to uppercase","success")
  }
  const handleDownClick = ()=>{
    let newText = text.toLowerCase();
    
    setText(newText);
    props.showAlert("Your text was successfully converted to lowercase","success")
  }

  const handleOnChange = (event)=>{

    setText(event.target.value)
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
      <div>
        <h1 style={{color: props.mode==="dark"?"white":"black"}}>We convert your text!!</h1>
      </div>
      <div className="form-floating">
          <textarea className="form-control" onChange={handleOnChange} id="myBox" style={{height: "180px", backgroundColor: props.mode==="dark"?"black":"white", color:props.mode==="dark"?"white":"black"}} value={text}></textarea>
          <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
      </div>
    </div>
    <div className="container">
      <h1 style={{color: props.mode==="dark"?"white":"black"}}>Your text Summary</h1>
      <p style={{color: props.mode==="dark"?"white":"black"}}>Words: {(text.split(" ")).length-1} Characters: {text.length}</p>
      <p style={{color: props.mode==="dark"?"white":"black"}}>{0.008*((text.split(" ")).length-1)} Minutes to read</p>

      <h2 style={{color: props.mode==="dark"?"white":"black"}}>Preview</h2>
      <p style={{color: props.mode==="dark"?"white":"black"}}>{text}</p>
    </div>
    </>
  )
}
