import React from "react";
import Task from "./Task";
import TaskAdder from "./TaskAdder";
import { Col } from "antd";

export default function TaskList(props) {
  function shouldRender(task) {
    if (props.name === "Search") {
      return (
        task.name.toLowerCase().indexOf(props.query.toLowerCase()) === 0 ||
        task === props.currTask
      );
    } else if (props.name === "All Tasks") {
      return task.status === "incomplete";
    } else if (props.name === "Completed") {
      return task.status === "complete";
    } else {
      return task.tags.includes(props.name);
    }
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
          shouldRender(task) && (
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
