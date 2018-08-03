import React, {Component} from 'react';


class TodoListItem extends Component {

  //子组件和父组件通信 要调用父组件传递过来的方法

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClickDel = () => {
    this.props.delete(this.props.index)
  }

  render() {
    const {content} = this.props
    return (
      <div
        onClick={this.handleClickDel}
      >
        {content}
      </div>
    )
  }
}

export default TodoListItem


