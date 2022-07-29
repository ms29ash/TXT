import React, { useState } from "react";
import "../Styles/TextField.css";

function TextField({ mode, toggleAlert }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const toUpperCase = (e) => {
    setText(text.toUpperCase());
  };
  const toLowerCase = (e) => {
    setText(text.toLowerCase());
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    toggleAlert('Copied to clipboard');
  };


  return (
    <main className={` main-${mode}`}>
      <div className="contain">


        <div className='container '>
          <h1>Enter The Text</h1>
          <textarea
            value={text}
            placeholder="Enter the Text"
            name="text"
            id="text-area"
            className={`text-area-${mode}`}
            cols="10"
            rows="10"
            onChange={handleChange}></textarea>
          <div className="buttons">
            <button onClick={toUpperCase} disabled={text.length === 0}>
              Uppercase
            </button>
            <button onClick={toLowerCase} disabled={text.length === 0}>
              Lowercase
            </button>
            <button onClick={copyText} disabled={text.length === 0}>
              Copy to clipboard
            </button>
          </div>

          <div className="results">
            <h3>Your Text summary</h3>
            <p>
              {" "}
              {
                text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              words and {text.length} char
            </p>

            <p>
              {" "}
              {0.008 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length}{" "}
              minutes require to read
            </p>

            <h3 id="preview" >Preview</h3>

            <p>{text}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TextField;
