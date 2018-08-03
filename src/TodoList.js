import React, {Component} from 'react';
import TodoListItem from './TodoListItem'
import './todoList.css'


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      word: ''
    }
  }

  //父组件通过属性的形式向子组件传递参数
  //子组件t通过props接受父组件传递过来的参数

  handleBtnClick = () => {
    this.setState({
      list: [...this.state.list, this.state.word],
      word: ''
    })
  }
  handleInpChange = e => {
    this.setState({
      word: e.target.value
    })
  }
  handleDelItemClick = index => {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
        list
      }
    )
  }
  getTodoItems = () => {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoListItem
            delete={this.handleDelItemClick}
            content={item}
            index={index}
            key={index}
          />
        )
      })
    )
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.word}
            onChange={this.handleInpChange}
            className="huzi_input"
          />
          <button
            onClick={this.handleBtnClick}>
            add
          </button>
        </div>
        <ul>
          {
            this.getTodoItems()
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
