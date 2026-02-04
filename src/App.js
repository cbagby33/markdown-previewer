import logo from './logo.svg';
import './App.css';
import React from 'react';

// Font Awesome dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab) // add library of icons 

class EditorArea extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="window" id="editor-window">
        <div class="toolbar">{'\u00A0'}<FontAwesomeIcon icon="fa-brands fa-markdown" />{'\u00A0'}Editor</div>
        <textarea id="editor">Placeholder text for editor</textarea>
      </div>
    )
  }
}

class PreviewArea extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="window" id="preview-window">
        <div class="toolbar">{'\u00A0'}<FontAwesomeIcon icon="fa-brands fa-html5" />{'\u00A0'}Preview</div>
        <textarea id="preview">Placeholder text for preview</textarea>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <EditorArea />
      <PreviewArea />
    </div>
  );
}

export default App;
