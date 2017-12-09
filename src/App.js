import React, { Component } from "react";
import { voteAngular, voteReact, voteVuejs } from "./actions";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  };

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  };

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  };

  render() {
    return (
      <div>
        <div className="jumbotron" style={{ textAlign: "center", marginTop: "2%" }}>
          <img src="ctsw_logo.png" height="96" alt="CodingTheSmartWay.com" />
          <h2>What is your favorite front-end development framework 2017?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <img
                src="angular_logo.png"
                height="96"
                alt="Angular"
                onClick={this.handleVoteAngular}
              />
            </div>
            <div className="col-xs-2">
              <img
                src="react_logo.png"
                height="96"
                alt="React"
                onClick={this.handleVoteReact}
              />
            </div>
            <div className="col-xs-2">
              <img
                src="vuejs_logo.png"
                height="96"
                alt="Vue.js"
                onClick={this.handleVoteVuejs}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
