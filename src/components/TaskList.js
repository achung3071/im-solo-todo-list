import React from "react";
import Task from "./Task";
import { Col, Input, Button } from "antd";

export default function TaskList(props) {
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
          <Input placeholder="New Task" />
        </div>
        <div className="add-task-button">
          <Button type="primary" shape="circle" icon="plus" />
        </div>
      </div>

      <Task name="name 1" />
      <Task name="name 2" />
    </Col>
  );
}
