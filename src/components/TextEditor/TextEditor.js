import React, { Component } from 'react';
import * as monaco from 'monaco-editor';

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.containerElement = undefined;
    this.initText = `function welcome() {\n\tconsole.log('welcome to TSS collab');\n}`;
  }
  
  assignRef = (component) => {
    this.containerElement = component;
  }

  initMonaco() {
    if (this.containerElement) {
      this.editor = monaco.editor.create(this.containerElement, {
        value: this.initText,
        language: "javascript",
      });
    }
  }

  registerEvents() {
    /* 
        { lineNumber: 3, column: 18 } => position

    */
    // this.editor.onDidChangeCursorPosition(e => {
    //     console.log('cursor got changed')
    //     this.editor.setV
    //     console.log(this.editor.getPosition());
    // });

    setTimeout(() => {
        // console.log(this.editor.getValue());
        this.editor.setPosition({lineNumber: 9, column: 1});
      }, 9000);
    // this.editor.onKeyDown(e => {
    //     console.log(e.target);
    // });
  }
  
  componentDidMount() {
    this.initMonaco();
    this.registerEvents();
  }

  render() {
    const style = {
      width: 1000,
      height: 500,
    };
    setTimeout(() => {
      console.log(this.editor.getValue());
    }, 10000);
    return (
        <div ref={this.assignRef} style={style} className="react-monaco-editor-container" />
    );
  }
}

export default TextEditor;
