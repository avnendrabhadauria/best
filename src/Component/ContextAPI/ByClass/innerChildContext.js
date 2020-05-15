import React from "react"
import { ContextNyJSX, ContextApiwithoutJSX } from "../ContextApi"
export default class InnerMostClass extends React.Component {

    static contextType = ContextApiwithoutJSX;
    render() {

        return (
            <ContextNyJSX.Consumer>
                {
                    (value) => {
                        console.log(value)
                        return (
                            <div>Name: {value.name} Year: {this.context.year}</div>

                        )
                    }
                }

            </ContextNyJSX.Consumer>
        )
    }
}