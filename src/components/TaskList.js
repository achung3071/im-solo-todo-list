import React from "react";
import Task from "./Task";
import TaskAdder from "./TaskAdder";
import { Col } from "antd";

export default function TaskList(props) {
  let nameOrStatus;
  let matchingString;
  if (props.name === "Search") {
    nameOrStatus = "name";
    matchingString = props.query;
  } else {
    nameOrStatus = "status";
    matchingString = props.name === "Completed" ? "complete" : "incomplete";
  }

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
      {props.tasks.map((task, index) => {
        return (
          task[nameOrStatus].indexOf(matchingString) === 0 && (
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
        );
      })}
    </Col>
  );
}
