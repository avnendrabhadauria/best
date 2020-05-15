import React from "react"
import Child from "./Component/ContextAPI/ByClass/ChildContext"
import Child2 from "./Component/ContextAPI/ByFunction/ChildfuncContext"
import { ContextNyJSX, ContextApiwithoutJSX, ContextNyJSX_func, ContextApiwithoutJSX_func } from "./Component/ContextAPI/ContextApi"
export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = { name: 'Ravi', year: 24 }
    }
    render() {



        return (
            <ContextApiwithoutJSX_func.Provider value={{ year: this.state.year }} >
                < ContextNyJSX_func.Provider value={{ name: this.state.name }}>
                    <ContextApiwithoutJSX.Provider value={{ year: this.state.year }}>
                        <ContextNyJSX.Provider value={{ name: this.state.name, year: 50 }} >
                            < div >
                                <Child />
                                <Child2 />
                            </ div>
                        </ContextNyJSX.Provider >
                    </ContextApiwithoutJSX.Provider>
                </ContextNyJSX_func.Provider>
            </ContextApiwithoutJSX_func.Provider>
        )

    }
}