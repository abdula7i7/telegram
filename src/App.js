import React from "react";

function App() {

  const mouseUp = () => {
    document.getElementById('editor')
    let selection = window.getSelection().toString();
    console.log(selection);
  }


  return (
    <div id="editor" contenteditable="true" onMouseUp={mouseUp} >
      <h1>
        salom lorem ipsum dolor sit
      </h1>
    </div>
  );
}

export default App;
