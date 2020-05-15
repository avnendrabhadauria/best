import React from "react"
import InnerChild from "./innerChildContext"
export default class ChildClass extends React.Component {

    render() {

        return (

            <InnerChild />
        )
    }
}