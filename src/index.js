import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();