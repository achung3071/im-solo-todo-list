import React from "react";
import Task from "./Task";
import TaskAdder from "./TaskAdder";
import { Col } from "antd";

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
      {props.name === "All Tasks" && <TaskAdder add={props.add} />}
      {props.tasks.map((task, index) => (
        <Task
          name={props.name}
          task={task}
          key={index}
          delete={props.delete}
          modify={props.modify}
        />
      ))}
    </Col>
  );
}
