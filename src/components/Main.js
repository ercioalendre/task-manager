import React, { Component } from "react";

export default class Main extends Component {
  state = {
    newTask: "Task Manager",
  };

  handleChange = event => {
    this.setState({
      newTask: event.target.value,
    });
  };

  render() {
    const { newTask } = this.state;
    return (
      <div className="main">
        <h1>{newTask}</h1>
        <form>
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
