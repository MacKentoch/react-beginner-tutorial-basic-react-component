import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

// A component: a class or a function
class App extends Component {
  // class constructor (pass props to super class and initialize state)
  constructor(props) {
    super(props);

    this.state = {
      wrote: '',
    };

    this.onWriting = this.onWriting.bind(this);
  }

  // most important method in a Component: tell react what/how to render it on DOM
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Basic React component</h2>

        <div className="row justify-content-center">
          <div className="col-6">
            <i>Write here:</i>
            <input
              className="form-control"
              type="text"
              value={this.state.wrote}
              onChange={this.onWriting}
              placeholder="write something"
            />
          </div>
        </div>

        <div className="space-40" />

        <div className="row justify-content-center">
          <div className="col-6">
            <i>What you wrote in real time:</i>
            <div className="jumbotron">
              <p className="recopy-text">{this.state.wrote}</p>
            </div>
          </div>
        </div>

        <div
          className="card text-white bg-secondary mb-3"
          style={{ padding: '1rem' }}
        >
          <small>
            NOTE: we are using bootstrap V4 css framework to make this more
            visually pleasant without effort!!!
          </small>
        </div>
      </div>
    );
  }

  // a custom method used for onChange callback (so ensure it bound to the component context)
  onWriting(event) {
    this.setState({ wrote: event.target.value });
  }
}

// let React render <App/> component the most efficiently way possible into the DOM:
render(<App />, document.getElementById('root'));
