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
          // currently edited task should not disappear on search re-rendering
          (task[nameOrStatus].indexOf(matchingString) === 0 ||
            task === props.currTask) && (
            <Task
              task={task}
              color={task === props.currTask ? "lightblue" : "white"}
              click={props.click}
              key={index}
              delete={props.delete}
              modify={
                task.status === "complete" ? props.revert : props.complete
              }
            />
          )
        );
      })}
    </Col>
  );
}
