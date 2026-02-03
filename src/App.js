import logo from './logo.svg';
import './App.css';
import React from 'react';

class EditorArea extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="editor-wrapper">
        <div class="toolbar">Editor</div>
        <textarea id="editor">Placeholder text for editor</textarea>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <EditorArea />
    </div>
  );
}

export default App;
