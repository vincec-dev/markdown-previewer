import React, { Component } from 'react';
import './App.css';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
// import FormControl from 'react-bootstrap/lib/FormControl';

let marked = require("marked");

const defaultInput =
`# Try our Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
`;

class App extends Component {

  state = {
    markdown : ""
  }

  componentWillMount() {
    this.setState({ markdown: defaultInput})
  }

  updateMarkdown = function(markdown) {
    this.setState({markdown});
  }

  render() {
    let { markdown } = this.state;
    return (
      <div className="App container-fluid">
        <div className="input-section">
          {/* <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Markdown Input</ControlLabel>
            <FormControl id="editor"
              rows="20"
              componentClass="textarea"
              placeholder="enter markdown here"
              value={markdown}
              onChange={(event)=>this.updateMarkdown(event.target.value)}
              </FormControl>
          </FormGroup> */}
          <h1 class="markdown-title">Markdown Input</h1>
          <textarea
            name="editor"
            id="editor"
            value={markdown}
            onChange={(event)=>this.updateMarkdown(event.target.value)}
            rows="30">
          </textarea>
        </div>
        <div className="output-section">
          <h1 className="markdown-title">Markdown Output</h1>
          <div dangerouslySetInnerHTML = {{__html: marked(markdown)}} id="preview" class="output-text"></div>
        </div>
      </div>
    );
  }
}

export default App;
