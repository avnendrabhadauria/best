import React, { Component } from "react"
import "./temp.css"
import { BackGroundimg } from "./Component/images"
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            states: [],
            data: {},
            Districts: [],
            FilterData: {},
            filterState: 'Chhose States',
            FilterDistricts: 'Chhose District',
            row: {}
        }
    }
    componentDidUpdate(prevprops, prevstate) {
        if (prevstate.filterState !== this.state.filterState) {
            this.setState({
                Districts: Object.keys(this.state.data[this.state.filterState].districtData),
                FilterDistricts: 'Chhose District'
            })
        }

    }

    componentDidMount() {
        fetch("https://api.covid19india.org/state_district_wise.json").then(res => {
            return res.json();
        }).then(d => {
            this.setState({
                states: Object.keys(d), data: d
            })
            console.log("data", d)
        }).catch(err => {
            console.log("err", err)
        })
    }
    Change = (e) => {
        console.log("eee", e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        let stateoption = [<option selected disabled hidden>Chhose States</option>]
        if (this.state.states.length > 0) {
            this.state.states.forEach((d, i) => {
                stateoption.push(<option name='filterState' key={d + i}>{d}</option>)
            })

        }

        let districtoption = [<option selected disabled hidden>Chhose District</option>]
        if (this.state.Districts.length > 0) {
            debugger
            this.state.Districts.forEach((d, i) => {
                districtoption.push(<option name='FilterDistricts' key={d + i}>{d}</option>)
            })

        }
        let tr = ''
        if (this.state.FilterDistricts !== '' && this.state.filterState !== ''
            && this.state.FilterDistricts !== 'Chhose District' &&
            this.state.filterState !== 'Chhose States' && this.state.data[this.state.filterState].districtData[this.state.FilterDistricts]
            && this.state.data[this.state.filterState].districtData[this.state.FilterDistricts]
        ) {
            debugger
            tr = <tr>

                <td>{this.state.filterState}</td>
                <td>{this.state.FilterDistricts}</td>
                <td>{this.state.data[this.state.filterState].districtData[this.state.FilterDistricts].confirmed}</td>
                <td>{this.state.data[this.state.filterState].districtData[this.state.FilterDistricts].active}</td>
                <td>{this.state.data[this.state.filterState].districtData[this.state.FilterDistricts].recovered}</td>
                <td>{this.state.data[this.state.filterState].districtData[this.state.FilterDistricts].deceased}</td>
            </tr>
        }



        return (<div className='App' >
            <div className='title'>
                <div>Coronaa</div>
            </div>
            <div className='header '>
                <div style={{ height: "99%" }}>
                    <nav className="navbar  ody  mb-0 ">
                        <div className="inline ody ml-3">
                            <form >
                                <div className="form-group  mb-0 ody">
                                    <label>States</label>
                                    <select type="text" name='filterState' className="form-control" placeholder="Example input" onChange={this.Change} value={this.state.filterState}>
                                        {stateoption}
                                    </select>
                                </div>
                            </form>

                        </div>
                        <div className="inline ml-3 ody">
                            <form>
                                <div className="form-group  mb-0 ody ">
                                    <label >Districts</label>
                                    <select name='FilterDistricts' type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" value={this.state.FilterDistricts} onChange={this.Change} >
                                        {districtoption}
                                    </select>
                                </div>
                            </form>

                        </div>



                    </nav>
                </div>
            </div>
            <div className='body table-responsive'>
                <table className="table">
                    <thead>
                        <tr>

                            <th scope="col">State</th>
                            <th scope="col">Districts</th>
                            <th scope="col">Confirmed</th>
                            <th scope="col">Active</th>
                            <th scope="col">Recovered</th>
                            <th scope="col">Death</th>

                        </tr>
                    </thead>
                    <tbody>
                        {tr}
                    </tbody>
                </table>
            </div>

        </div>)
    }
}