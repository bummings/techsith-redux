import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  // damn man where's all yr state
  // oh wait you using REDUX, huh??

  render() {
    return (
      <div className="App">
        <div>
          Age: <span>{this.props.age}</span>
        </div>

        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <br />
        <div>History</div>
        <div>
          <ul>
            {this.props.history.map(el => (
              <li
                key={el.id}
                className="historyItem"
                onClick={() => this.props.onDelItem(el.id)}
              >
                {el.age}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history,
    state: state.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    onDelItem: id => dispatch({ type: "DELETE_ITEM", key: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
