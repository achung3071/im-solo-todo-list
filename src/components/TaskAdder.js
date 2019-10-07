import React from "react";
import { Input, Button } from "antd";

export default class TaskAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTask: "" };
    this.changeNewTask = this.changeNewTask.bind(this);
  }

  changeNewTask(e) {
    this.setState({ newTask: e.target.value });
  }

  render() {
    return (
      <div className="task-adder">
        <div className="task-input">
          <Input
            placeholder="New Task"
            onChange={this.changeNewTask}
            onPressEnter={() => {
              this.props.add(this.state.newTask);
              this.setState({ newTask: "" });
            }}
            value={this.state.newTask}
          />
        </div>
        <div className="add-task-button">
          <Button
            type="primary"
            shape="circle"
            icon="plus"
            onClick={() => {
              this.props.add(this.state.newTask);
              this.setState({ newTask: "" });
            }}
          />
        </div>
      </div>
    );
  }
}
