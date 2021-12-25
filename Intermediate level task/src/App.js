import Users from "./card.js";
import "./styles.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });
    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      1500
    );
  }

  render() {
    return (
      <>
        <nav>
          <div className="box">
            <div className="row">
              <div className="column1">
                <h2>Users Profile</h2>
              </div>
              <div className="column2">
                <button onClick={this.updateState}>Get Users</button>
              </div>
            </div>
          </div>
        </nav>
        <div className="box2">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
      </>
    );
  }
}

export default App;
