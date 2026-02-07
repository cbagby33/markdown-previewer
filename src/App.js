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
        <div className="toolbar">{'\u00A0'}<FontAwesomeIcon icon="fa-brands fa-markdown" />{'\u00A0'}Editor</div>
        <textarea onChange={this.props.handleChange} id="editor" value={this.props.value}></textarea>
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
        <div className="toolbar">{'\u00A0'}<FontAwesomeIcon icon="fa-brands fa-html5" />{'\u00A0'}Preview</div>
        <textarea id="preview" value={this.props.value} ></textarea>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: 'Placeholder text for preview'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({
      input: evt.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <EditorArea handleChange={this.handleChange} value={this.state.input}/>
        <PreviewArea value={this.state.input} />
      </div>
    );
  }
}

export default App;
