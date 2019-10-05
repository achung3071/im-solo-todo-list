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
      showDetails: false,
      tasksInProg: [],
      tasksCompleted: [],
      currFolder: "All Tasks",
      folders: ["All Tasks", "Day-by-Day", "Completed"]
    };
    this.addTask = this.addTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.revertTask = this.revertTask.bind(this);
    this.changeFolder = this.changeFolder.bind(this);
  }

  addTask(name) {
    if (name.length === 0) return;
    let tasks = [...this.state.tasksInProg];
    tasks.push({ name, time: "Undated" });
    this.setState({ tasksInProg: tasks });
  }

  changeFolder(item) {
    let key = parseInt(item.key);
    if (key !== 0) {
      this.setState({
        currFolder: this.state.folders[key - 1]
      });
    }
  }

  completeTask(task) {
    let taskIndex = this.state.tasksInProg.indexOf(task);
    let inProgress = [...this.state.tasksInProg];
    let completed = [...this.state.tasksCompleted];
    inProgress.splice(taskIndex, 1);
    completed.push(task);
    this.setState({
      tasksInProg: inProgress,
      tasksCompleted: completed
    });
  }

  deleteTask(progressKey, task) {
    let arr = this.state[progressKey];
    let taskIndex = arr.indexOf(task);
    let newArr = [...arr];
    newArr.splice(taskIndex, 1);
    this.setState({
      [progressKey]: newArr
    });
  }

  revertTask(task) {
    let taskIndex = this.state.tasksCompleted.indexOf(task);
    let inProgress = [...this.state.tasksInProg];
    let completed = [...this.state.tasksCompleted];
    completed.splice(taskIndex, 1);
    inProgress.push(task);
    this.setState({
      tasksInProg: inProgress,
      tasksCompleted: completed
    });
  }

  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Nav folders={this.state.folders} change={this.changeFolder} />
        <Layout>
          <Content style={{ margin: "16px" }}>
            {this.state.currFolder === "All Tasks" && (
              <TaskList
                name="All Tasks"
                tasks={this.state.tasksInProg}
                add={this.addTask}
                delete={this.deleteTask.bind(this, "tasksInProg")}
                modify={this.completeTask}
              />
            )}
            {this.state.currFolder === "Completed" && (
              <TaskList
                name="Completed"
                tasks={this.state.tasksCompleted}
                delete={this.deleteTask.bind(this, "tasksCompleted")}
                modify={this.revertTask}
              />
            )}
            {this.showDetails && <TaskDetails />}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
