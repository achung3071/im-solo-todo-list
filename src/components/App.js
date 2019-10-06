import React from "react";
import Nav from "./Nav";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
import "../App.css";
import { Layout } from "antd";
const { Content } = Layout;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currFolder: "All Tasks",
      folders: ["All Tasks", "Day-by-Day", "Completed"],
      currTask: null
    };
    this.addTask = this.addTask.bind(this);
    this.changeFolder = this.changeFolder.bind(this);
    this.changeTaskInfo = this.changeTaskInfo.bind(this);
    this.clickTask = this.clickTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.revertTask = this.revertTask.bind(this);
  }

  addTask(name) {
    if (name.length === 0) return;
    let tasks = [...this.state.tasks];
    tasks.push({ name, time: "Undated", status: "incomplete" });
    this.setState({ tasks });
  }

  changeFolder(item) {
    let key = parseInt(item.key);
    if (key !== 0) {
      this.setState({
        currFolder: this.state.folders[key - 1],
        currTask: null
      });
    }
  }

  changeTaskInfo(changeType, newInfo) {
    let currTask = this.state.currTask;
    let arr = this.state.tasks;
    let taskIndex = arr.indexOf(currTask);
    let newArr = [...arr];
    let newTask = { ...currTask };
    newTask[changeType] = newInfo;
    newArr[taskIndex] = newTask;
    this.setState({
      tasks: newArr,
      currTask: newTask
    });
  }

  clickTask(task) {
    if (task === this.state.currTask) {
      this.setState({
        currTask: null
      });
    } else {
      this.setState({
        currTask: task
      });
    }
  }

  completeTask(task) {
    let currTask = task === this.state.currTask ? null : this.state.currTask;
    let taskIndex = this.state.tasks.indexOf(task);
    let tasks = [...this.state.tasks];
    tasks[taskIndex].status = "complete";
    this.setState({ tasks, currTask });
  }

  deleteTask(task) {
    let currTask = task === this.state.currTask ? null : this.state.currTask;
    let taskIndex = this.state.tasks.indexOf(task);
    let tasks = [...this.state.tasks];
    tasks.splice(taskIndex, 1);
    this.setState({ tasks, currTask });
  }

  revertTask(task) {
    let currTask = task === this.state.currTask ? null : this.state.currTask;
    let taskIndex = this.state.tasks.indexOf(task);
    let tasks = [...this.state.tasks];
    tasks[taskIndex].status = "incomplete";
    this.setState({ tasks, currTask });
  }

  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Nav folders={this.state.folders} change={this.changeFolder} />
        <Layout>
          <Content style={{ margin: "16px" }}>
            {
              <TaskList
                name={this.state.currFolder}
                tasks={this.state.tasks}
                currTask={this.state.currTask}
                click={this.clickTask}
                add={this.addTask}
                delete={this.deleteTask}
                modify={
                  this.state.currFolder === "Completed"
                    ? this.revertTask
                    : this.completeTask
                }
              />
            }
            {this.state.currTask && (
              <TaskDetails
                task={this.state.currTask}
                changeInfo={this.changeTaskInfo}
              />
            )}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
