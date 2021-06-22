import React from "react";
import "./App.css";
import Header from "./components/Header";
import Action from "./components/Action";
import Timer from "./components/Timer";

class App extends React.Component {
  constructor(props, timer) {
    super(props);
    this.timer = timer;

    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    };
  }

  handleStart = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        return {
          millisecond: prevState.millisecond + 1
        };
      });

      if (this.state.millisecond === 60) {
        this.setState((prevState) => {
          return {
            second: prevState.second + 1,
            millisecond: 0
          };
        });
      }

      if (this.state.second === 60) {
        this.setState((prevState) => {
          return {
            minute: prevState.minute + 1,
            second: 0
          };
        });
      }
      if (this.state.minute === 60) {
        this.setState((prevState) => {
          return {
            hour: prevState.hour + 1,
            minute: 0
          };
        });
      }
    }, 10);
  };

  handleStop = () => {
    clearInterval(this.timer);
  };

  handleReset = () => {
    this.setState(() => {
      return {
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
    });
  };

  render() {
    return (
      <div className="parent">
        <div className="main">
          <Header />
          <Timer time={this.state} />
          <Action
            handleStart={this.handleStart}
            handleStop={this.handleStop}
            handleReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}

export default App;
