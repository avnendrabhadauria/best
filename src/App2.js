import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clas from "./Component/lifecycle/clas"
import Fun from "./Component/lifecycle/fun"
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 0, show: true, count2: 0, show2: true }
    console.log("App:hey this is clas Class Constructoe")
  }
  clik = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState((preState) => {
      return { count: preState.count + 1 }
    })
  }
  clik2 = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState((preState) => {
      return { count2: preState.count2 + 1 }
    })
  }
  hide = (e) => {
    e.stopPropagation();
    this.setState((prevstate) => {
      return ({ show: !prevstate.show })
    })

  }
  hide2 = (e) => {
    e.stopPropagation();
    this.setState((prevstate) => {
      return ({ show2: !prevstate.show2 })
    })

  }
  // static getDerivedStateFromProps(state, props) {
  //   console.log("App:hey this is clas Class getDerivedStateFromProps")
  //   return null;
  // }
  componentDidMount() {
    console.log("App:hey this is clas Class componentDidMount")

  }
  shouldComponentUpdate(nextState, nextProps) {
    console.log("App:hey this is clas Class shouldComponentUpdate");
    return true;
  }
  componentDidUpdate(state, props) {
    console.log("App:hey this is clas Class componentDidUpdate");
  }
  getSnapshotBeforeUpdate(prestate, preProps) {
    console.log("App:hey this is clas Class getSnapshotBeforeUpdate");
    return null;
  }
  componentWillUnmount() {
    console.log("App:hey this is clas Class componentWillUnMount");
  }

  render() {
    console.log("APP:hey this is clas Class render")
    return (
      <div className="App" >
        <button onClick={this.hide}>{this.state.show ? "Hide" : "Show"}</button>

        < button onClick={this.clik}>IncrementCount</button>
        {this.state.show ? <Clas message={"Hello" + this.state.count} /> : ''}
----------------------------------------------------------------------------------------------------------------
        <button onClick={this.hide2}>{this.state.show2 ? "Hide" : "Show"}</button>

        < button onClick={this.clik2}>IncrementCount</button>
        {this.state.show2 ? <Fun message={"Fun" + this.state.count2} /> : ''}

      </div >
    );
  }
}

export default App;
