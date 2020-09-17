import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './Todo'

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: [],
      input: '',
    }

    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleChange(val) {
    this.setState({ input: val })
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: '',
    })
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />
    })

    return (
      <div className='App'>
        <h1> My To-Do List </h1>
        <div>
          <input value={this.state.input} onChange={(e) => this.handleChange(e.target.value)} placeholder='New Item' />
          <button onClick={this.handleAddTask}> Add </button>
        </div>
        <br />

        {list}
      </div>
    )
  }
}

export default App;
