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
      folders: ["Search", "All Tasks", "Day-by-Day", "Completed"],
      currTask: null,
      query: "",
      allTags: []
    };
    this.addTag = this.addTag.bind(this);
    this.addTask = this.addTask.bind(this);
    this.changeFolder = this.changeFolder.bind(this);
    this.changeTaskInfo = this.changeTaskInfo.bind(this);
    this.clickTask = this.clickTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.revertTask = this.revertTask.bind(this);
    this.search = this.search.bind(this);
  }

  addTag(value) {
    let taskIndex = this.state.tasks.indexOf(this.state.currTask);
    let newTask = { ...this.state.currTask };
    let tasks = [...this.state.tasks];
    let tags = newTask.tags;
    if (value && tags.indexOf(value) === -1) {
      newTask.tags = [...tags, value];
      tasks[taskIndex] = newTask;
    }
    let allTags = this.state.allTags.includes(value)
      ? this.state.allTags
      : [...this.state.allTags, value];
    this.setState({
      currTask: newTask,
      tasks,
      allTags
    });
  }

  addTask(name) {
    if (name.length === 0) return;
    let tasks = [...this.state.tasks];
    tasks.push({ name, time: "Undated", status: "incomplete", tags: [] });
    this.setState({ tasks });
  }

  changeFolder(item) {
    let key = parseInt(item.key);
    this.setState({
      currFolder: this.state.folders[key],
      currTask: null
    });
  }

  changeTaskInfo(changeType, newInfo) {
    let currTask = this.state.currTask;
    let arr = this.state.tasks;
    let taskIndex = arr.indexOf(currTask);
    let newArr = [...arr];
    let newTask = { ...currTask };
    newTask[changeType] = newInfo;
    newArr[taskIndex] = newTask;
    if (changeType === "time") {
      newArr.sort((a, b) => {
        if (a.time === "Undated") {
          return 1;
        } else if (b.time === "Undated") {
          return -1;
        }
        let time1 = parseInt(a.time.replace(/[\s-:]/g, ""));
        let time2 = parseInt(b.time.replace(/[\s-:]/g, ""));
        return time1 - time2;
      });
    }
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

  search(query) {
    this.setState({ query });
  }

  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Nav
          folders={this.state.folders}
          change={this.changeFolder}
          search={this.search}
        />
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
                revert={this.revertTask}
                complete={this.completeTask}
                query={this.state.query}
              />
            }
            {this.state.currTask && (
              <TaskDetails
                task={this.state.currTask}
                add={this.addTag}
                changeInfo={this.changeTaskInfo}
              />
            )}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
