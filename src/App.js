import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import ReactMarkdown from 'react-markdown'


const Result = (props)=> {

    console.log(props.info)

    return (
      <div id="preview">
       <ReactMarkdown children={props.info}/>
      </div>
    )
}

function App() {

  const predet = `# Hola 

  ## Hola 

  [link](https://www.freecodecamp.org/) 

  \`<div></div>\` 

  \`\`\` 
  <div> 
  <div><h1>Hola de nuevo</h1></div>
  </div>
   \`\`\` 

  1. algo
  
  ![freeCodeCamp](data:image/png;base64,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)
  
  > Algo que dijo alguien
  
  **algo**`;

  const [text, setText] = useState(predet)

  const handleChange = (e) => {
      setText(e.target.value)
  }

  return (
    <div className="container" id="container">
      <h1 className="row mt-5">Markdown Previewer</h1>
      <div className="row d-flex justify-content-center m-0">
        <div className="col-10 d-flex justify-content-center">
     <textarea id="editor" value={text} onChange={handleChange}/>
        </div>
        <div className="col-10">
     <Result info={text}/>
        </div>
     </div>
    </div>
  );
}

export default App;
