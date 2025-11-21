import React from "react";
import ChildComponent from "./ChildComponent";
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
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
        <button onClick={() => this.addNumber(2)}>ADD BY 1</button>
        <br />
        <button onClick={() => this.decreaseNumber(2)}>DECREASE BY 1</button>
        <ChildComponent count={this.state.count} />
      </>
    );
  }
}

export default ClassComponent;
