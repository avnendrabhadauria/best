import React, { Component } from "react"
import "./temp.css"
import { BackGroundimg } from "./Component/images"
import Graph from "./chart/chart"
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            states: [],
            data: {},
            Districts: [],
            FilterData: {},
            filterState: 'Choose States',
            FilterDistricts: 'Choose District',
            row: {},
            display: false
        }
    }
    componentDidUpdate(prevprops, prevstate) {
        if (prevstate.filterState !== this.state.filterState) {
            this.setState({
                Districts: Object.keys(this.state.data[this.state.filterState].districtData),
                FilterDistricts: 'Choose District'
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

        }).catch(err => {
            console.log("err", err)
        })
    }
    Change = (e) => {
        console.log("eee", e.target.name)
        let obj = { [e.target.name]: e.target.value }
        if (e.target.name === 'FilterDistricts') {
            obj["display"] = true;

        }
        else {
            obj["display"] = false;
        }
        this.setState(obj)
    }
    render() {
        let stateoption = [<option selected disabled hidden>Choose States</option>]
        if (this.state.states.length > 0) {
            this.state.states.forEach((d, i) => {
                stateoption.push(<option name='filterState' key={d + i}>{d}</option>)
            })

        }

        let districtoption = [<option selected disabled hidden>Choose District</option>]
        if (this.state.Districts.length > 0) {

            this.state.Districts.forEach((d, i) => {
                districtoption.push(<option name='FilterDistricts' key={d + i}>{d}</option>)
            })

        }
        let tr = ''
        if (this.state.FilterDistricts !== '' && this.state.filterState !== ''
            && this.state.FilterDistricts !== 'Choose District' &&
            this.state.filterState !== 'Choose States' && this.state.data[this.state.filterState].districtData[this.state.FilterDistricts]
            && this.state.data[this.state.filterState].districtData[this.state.FilterDistricts]
        ) {

            tr = <tr>

                <td>{this.state.filterState}</td>
                <td>{this.state.FilterDistricts}</td>
                <td>{this.state.data[this.state.filterState].districtData[this.state.FilterDistricts].confirmed}</td>
                <td>{this.state.data[this.state.filterState].districtData[this.state.FilterDistricts].active}</td>
                <td>{this.state.data[this.state.filterState].districtData[this.state.FilterDistricts].recovered}</td>
                <td>{this.state.data[this.state.filterState].districtData[this.state.FilterDistricts].deceased}</td>
            </tr>
        }
        let data = ''
        if (this.state.display) {
            data = {
                labels: ['Total', 'Recovered', 'Active',
                    'Death'],
                datasets: [
                    {
                        label: "Cases",
                        fontColor: "white",
                        backgroundColor: [
                            'rgba(75,192,102,1)',
                            'rgba(75,192,12,1)',
                            'rgba(253,123,123,1)',
                            'rgba(247,12,12,1)'
                        ],
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: [this.state.data[this.state.filterState].districtData[this.state.FilterDistricts].confirmed,
                        this.state.data[this.state.filterState].districtData[this.state.FilterDistricts].active,
                        this.state.data[this.state.filterState].districtData[this.state.FilterDistricts].recovered,
                        this.state.data[this.state.filterState].districtData[this.state.FilterDistricts].deceased, 100]
                    }
                ]
            }

        }


        return (<div className='App' >
            <div className='title'>
                <div>COVID-19</div>
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
            <div className='graph' >
                {this.state.display ? <Graph state={data} district={this.state.FilterDistricts} /> : ''
                }
                {/* <Graph FilterDistricts={'a'}  /> */}
            </div>

        </div>)
    }
}