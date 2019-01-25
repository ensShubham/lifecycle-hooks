import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      name: this.props.name,
      number: 1
    };
    this.increase = this.increase.bind(this);
  }
  componentWillMount() {
    console.log("componentWillMount");
    this.setState({
      name: "state"
    });
  }
  increase() {
    this.setState({
      number: this.state.number + 1
    });
  }
  render() {
    console.log("rendering");
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <h2>{this.state.number}</h2>
        <button className="btn" id="btn" onClick={this.increase}>
          Click to increase
        </button>
      </div>
    );
  }
  componentWillReceiveProps(nextProps) {
    console.log("props received");
    this.setState({ name: nextProps.name });
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}

export default App;
