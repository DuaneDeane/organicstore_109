import React, { Component } from "react";
import "./todo.css";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/actions";

class Todo extends Component {
  state = {
    todoText: "",
    todos: [],
  };

  render() {
    return (
      <div>
        <h5>Simple todo App</h5>

        <div>
          <input
            type="text"
            value={this.state.todoText}
            onChange={this.handleTextChange}
            placeholder="Todo text"
          ></input>
          <button onClick={this.hanldeButtonClick}>Add</button>
        </div>

        <div id="todoList">
          <ul>
            {this.props.todo.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  addTodo = () => {
    console.log(this.state.todoText);
    this.state.todos.push(this.state.todoText);

    this.setState({
      todoText: "",
    });
  };
  handleTextChange = (event) => {
    this.setState({ todoText: event.target.value });
  };

  hanldeButtonClick = () => {
    console.log("Clicked!!!");
    this.props.addTodo(this.state.todoText);
  };
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

export default connect(mapStateToProps, { addTodo })(Todo);
