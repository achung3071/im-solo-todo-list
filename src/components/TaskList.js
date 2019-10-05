import React from "react";
import Task from "./Task";
import { Col, Input, Button } from "antd";

export default class TaskList extends React.Component {
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
      <Col
        span={12}
        style={{
          backgroundColor: "white",
          height: "100%",
          padding: "16px",
          overflow: "auto"
        }}
      >
        <div className="task-adder">
          <div className="task-input">
            <Input placeholder="New Task" onChange={this.changeNewTask} />
          </div>
          <div className="add-task-button">
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              onClick={() => this.props.addTask(this.state.newTask)}
            />
          </div>
        </div>
        {this.props.tasks.map(task => (
          <Task name={task.name} />
        ))}
      </Col>
    );
  }
}
