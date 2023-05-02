import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
       let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

      
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to lowercase","success");
     }

     const handleclear = ()=>{
        let newText = "";
         setText(newText);
         props.showAlert("Text cleared","success");
     }

     const handleCopy = ()=>{
        let Text = document.getElementById('myBox');
         Text.select();
         navigator.clipboard.writeText(Text.value);
         props.showAlert("Copied to clipboard","success");
     }
     const handleSpace = ()=>{
    let newText = text.replace(/\s+/g,' ').trim();
    setText(newText);
    props.showAlert("Extra spaces removed","success");
     }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');

 const numberOfWords = ()=>{
    let a;
    let time;
    if(text.length===0){
        a= 0;
        time=0;
    }
    else{a= text.split(" ").length;
    time=0.008; 
    }

    let obj={numberOfWords:a,Time:time};
       return obj;
 }


  return (
  <>
 <div className='container' style = {{color:props.mode==='light'?'black':'white'}}>
    <h1>{props.heading} </h1>
    <div className="mb-3">
        <textarea className='form-control' id="myBox" rows="8" value = {text} onChange={handleOnChange} style = {{backgroundColor:props.mode==='light'?'white':'#2b3835',color:props.mode==='light'?'black':'white'}}></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-2' onClick={handleclear}>Clear</button>
    <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button>
    <button className='btn btn-primary mx-2' onClick={handleSpace}>Remove extra space</button>
 </div>
 <div className="container my-3" style = {{color:props.mode==='light'?'black':'white'}}>
    <h2>Youer text summary</h2>
    <p>{numberOfWords().numberOfWords} -  words and {text.length} - Character</p>
    <p> {numberOfWords().Time*text.split(" ").length} - Minutes to read </p>
    <h2>Preview</h2>
    <p>{text.length===0?"Enter the text above to preview here.":text}</p>
 </div>
  </>
  )
}
