import React from "react";
import Task from "./Task";
import TaskAdder from "./TaskAdder";
import { Col } from "antd";

export default function TaskList(props) {
  let statusMatch = props.name === "Completed" ? "complete" : "incomplete";
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
      {props.tasks.map(
        (task, index) =>
          task.status === statusMatch && (
            <Task
              name={props.name}
              task={task}
              color={task === props.currTask ? "lightblue" : "white"}
              click={props.click}
              key={index}
              delete={props.delete}
              modify={props.modify}
            />
          )
      )}
    </Col>
  );
}
