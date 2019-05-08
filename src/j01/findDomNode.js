import React from "react";
import ReactDOM from "react-dom";

class Child extends React.Component {
  render() {
    return <p>child</p>
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div ref={div => {
          this._div = div
        }}>app
        </div>
        <Child ref={child => this._child = child}/>
        <button onClick={()=> {
          console.log(ReactDOM.findDOMNode(this._div) === this._div);
          console.log(ReactDOM.findDOMNode(this._child));
        }}>log refs
        </button>
      </div>

    )
  }
}