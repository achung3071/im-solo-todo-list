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
      tasksCompleted: []
    };
    this.addTask = this.addTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  addTask(name) {
    if (name.length === 0) return;
    let tasks = [...this.state.tasksInProg];
    tasks.push({ name, time: "Undated" });
    this.setState({ tasksInProg: tasks });
    console.log(this.state.tasksInProg);
  }

  completeTask(task) {
    let taskIndex = this.state.tasks.indexOf(task);
    let inProgress = [...this.state.tasksInProg];
    let completed = [...this.state.tasksCompleted];
    inProgress.splice(taskIndex, 1);
    completed.push(task);
    this.setState({
      tasksInProg: inProgress,
      tasksCompleted: completed
    });
  }

  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Nav />
        <Layout>
          <Content style={{ margin: "16px" }}>
            <TaskList addTask={this.addTask} tasks={this.state.tasksInProg} />
            {this.showDetails && <TaskDetails />}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskSelected: true
    };
  }

  render() {
    return (
      <div className="App">
        <Row>
          <Nav />
          <TaskList />
          {this.state.taskSelected && <TaskDetails />}
        </Row>
      </div>
    );
  }
}

export default App;*/
