import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

<<<<<<< HEAD
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
       count: 0,
       inputValue: "",
       tasks: [
        { title: "白いやつを迎える準備をする" },
        { title: "あの壺をキシリア様に届ける" },
        { title: "あれはいいものだ" },
       ]
    }
  }

  // アロー関数で定義すればthisは定義したところを指す
  handlePlusButton = () => [
    this.setState({ count: this.state.count + 1 })
  ]

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  handleChangeInput = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  handleAddButton = () => {
    const inputValue = this.state.inputValue
    this.addTodo(inputValue)
  }

  addTodo = (title) => {
    const items = this.state.tasks
    const item = { title: title } 
    items.push(item)
    this.setState({ tasks: items })
  }

  handleResetButton = () => {
    this.setState({ tasks: [] })
  }

  render() {
    const items = this.state.tasks.map((item) => {
      return <TodoItem {...item} />
    })
    return(
      <React.Fragment>
        <div className="counter-area">
          <div>count: {this.state.count}</div>
          <button onClick={this.handlePlusButton}>+</button>
          <button onClick={this.handleMinusButton}>-</button>
        </div>
        <div className="input-area">
          <input type="text" placeholder="タスクを入力してください" onChange={this.handleChangeInput}/>
          <div>{this.state.inputValue}</div>
          <button onClick={this.handleAddButton}>追加</button>
          <button onClick={this.handleResetButton}>リセット</button>
        </div>
        <div className="todo-listing">
          <ul>
            {items}
          </ul>
        </div>
=======
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
>>>>>>> 180730
      </React.Fragment>
    )
  }
}

<<<<<<< HEAD
ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
=======
ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
>>>>>>> 180730
