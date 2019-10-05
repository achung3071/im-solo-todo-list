import React from "react";
import Nav from "./Nav";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
import "../App.css";
import { Layout } from "antd";
const { Content } = Layout;

export default class App extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Nav />
        <Layout>
          <Content style={{ margin: "16px" }}>
            <TaskList />
            <TaskDetails />
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
