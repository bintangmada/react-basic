import React from "react";
import ChildComponent from "./ChildComponent";
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      input: "",
    };

    this.addNumber = this.addNumber.bind(this);
  }

  addNumber(number) {
    this.setState((prevState) => ({ count: prevState.count + number }));
  }

  decreaseNumber(number) {
    this.setState((prevState) => ({ count: prevState.count - number }));
  }

  render() {
    return (
      <>
        <h1>Ini Class Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.addNumber(1)}>ADD BY 1</button>
        <br />
        <button onClick={() => this.decreaseNumber(1)}>DECREASE BY 1</button>
        <ChildComponent count={this.state.count} />

        <input
          type="text"
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
        ></input>

        <p>Inputan : {this.state.input}</p>
      </>
    );
  }
}

export default ClassComponent;
