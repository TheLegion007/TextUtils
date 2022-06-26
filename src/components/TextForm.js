import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick =()=> {
        //console.log("UpperCase was Clicked !!" + text);
        let newText =  text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick =()=> {
        //console.log("UpperCase was Clicked !!" + text);
        let newText =  text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleOnChange = (event)=> {
        //console.log("OnChange was run");
        setText(event.target.value);    // to set the value user writing + previous string as well in text area //
    }
    const handleClearClick = ()=> {
        let newText = " ";
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }

    const [text, setText] = useState('');     // text state created (use state hooks ), setText ek function hai to change state//
    // text =  newtext ; wrong way of changing text //
    //setText("newText") ;  correct way of changing text //
    return (
    <div>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter Text here' id="myBox" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.length>0?text.split(" ").length:0} Words, {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : 'Enter Something in the text to Preview'}</p>
        </div>
    </div>
  )
}
