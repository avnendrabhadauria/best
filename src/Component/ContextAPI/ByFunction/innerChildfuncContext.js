import React, { useContext } from "react"
import { ContextNyJSX_func, ContextApiwithoutJSX_func } from "../ContextApi"
export default function InnerChildfuncContext(props) {

    const myvalue = useContext(ContextApiwithoutJSX_func);


    return (
        <ContextNyJSX_func.Consumer>
            {
                (value) => {

                    return (
                        <div>Child Name: {value.name} Year: {myvalue.year}</div>

                    )
                }
            }

        </ContextNyJSX_func.Consumer>
    )

}