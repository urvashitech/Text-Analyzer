import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  const handleOnChange = (event) => {
    //console.log("on change")
    setText(event.target.value);
  };
  const handleUpClick = (event) => {
    console.log("Uppercase is clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleClearClick = (event) => {
    let newText = " ";
    setText(newText);
  };

  const handleLoClick = (event) => {
    //console.log("Uppercase is clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    //const[text,setText] = useState("Enter Text Here");
    //text = 'new text' ->Wrong way to change the state
    // setText = 'new text' ->Correct way to change the state
  };
  const handleSpeakClick = (event) => {
    // console.log(text)
    // Create a new SpeechSynthesisUtterance object
    let utterance = new SpeechSynthesisUtterance(); 

    // Set the text and voice of the utterance
    utterance.text = text;
    utterance.voice = window.speechSynthesis.getVoices()[0];

    // Speak the utterance
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      <div className="container my-5">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSpeakClick}>
          Speak The Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear The Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
