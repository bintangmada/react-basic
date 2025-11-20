import React from "react";
import ChildComponent from "./ChildComponent";
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <>
        <h1>Ini Class Component</h1>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          ADD BY 1
        </button>
        <br />
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count - 1 }))
          }
        >
          DECREASE BY 1
        </button>
        <ChildComponent count={this.state.count} />
      </>
    );
  }
}

export default ClassComponent;
