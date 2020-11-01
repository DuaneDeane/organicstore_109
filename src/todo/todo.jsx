import React, { Component } from 'react';
import "./todo.css";
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
                    <input type="text" value={this.state.todoText} onChange={this.handleTextChange} placeholder="Todo text"></input>
                    <button onClick={this.addTodo}>Add</button>
                </div>

                <div id="todoList">
                    <ul>
                        {this.state.todos.map((text) => <li key={text}>{text}</li>)}
                    </ul>
                </div>
            </div>
         );
    }
    addTodo = () => {
        console.log(this.state.todoText);
        this.state.todos.push(this.state.todoText);
        // copy the array from the state into a variable
        // let newtodos = [...this.state.todos];
        // push the text into a var
        // var text = this.state.todoText;
        // update the array in the state with the var
        this.setState({
            todoText: ""
        });
    }
    handleTextChange = (event) => {
        this.setState({todoText: event.target.value});
    };
}
 
export default Todo;

/**
 * steps:
 * 1 - click on button
 * 2 - console log the text from the state
 * 3 - push that text into the state
 * 4 - clear the input (clear the state.todoText)
 * 5 - map the state.todos to li
 *
 */