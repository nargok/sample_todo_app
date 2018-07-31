import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      todo: 5,
      done: 0,
      tasks: [
        {
          title: "デフォルトtodo",
          done: false
        }
      ]
     }
  }

  handleResetButton = () =>
    this.setState({
       inputValue: "",
       tasks: []
    })

  handleInputChange = (e) =>
    this.setState({ inputValue: e.target.value })

  handleAddButton = () => {
    const task = this.state.inputValue
    this.addTask(task)
  }

  addTask = (title) => {
    const items = this.state.tasks
    const item = { title: title, done: false }
    items.push(item)
    this.setState({ taks: items })
  }

  handleDone = (index) => {
    this.state.tasks[index].done = !this.state.tasks[index].done
    this.setState({ tasks: this.state.tasks })    
  }

  render() {
    const list_items = this.state.tasks.map((task, index) => {
      if ( task.done === false) {
        return <li key={index} onClick={() => this.handleDone(index)}>{ task.title }</li>
      }
      else {
        return <s key={index}><li onClick={() => this.handleDone(index)}>{ task.title }</li></s>
      }
    })

    return(
      <React.Fragment>
       <div>
         <input value={this.state.inputValue} type="text" onChange={this.handleInputChange} placeholder="タスクを入力" />
          <button onClick={this.handleAddButton}>Add</button>
          <button onClick={this.handleResetButton}>reset</button>
       </div>
        <div>
          {this.state.inputValue}
        </div>
        <ul>
          {list_items}
        </ul>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
