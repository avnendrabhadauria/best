import React, { Component } from "react"
export default class clas extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log("C2:hey this is clas Class Constructoe")
    }
    // static getDerivedStateFromProps(state, props) {
    //     console.log("C2:hey this is clas Class getDerivedStateFromProps")
    //     return null;
    // }
    componentDidMount() {
        console.log("C2:hey this is clas Class componentDidMount")

    }
    shouldComponentUpdate(nextState, nextprops) {
        console.log("C2:hey this is clas Class shouldComponentUpdate");
        return true;
    }
    componentDidUpdate(state, props) {
        console.log("C2:hey this is clas Class componentDidUpdate");
    }
    getSnapshotBeforeUpdate(prestate, preprops) {
        console.log("C2:hey this is clas Class getSnapshotBeforeUpdate");
        return null;
    }
    componentWillUnmount() {
        console.log("C2:hey this is clas Class componentWillUnMount");
    }
    render() {
        console.log("C2:hey this is clas Class render")
        return (<div>{this.props.message}</div>)
    }
}