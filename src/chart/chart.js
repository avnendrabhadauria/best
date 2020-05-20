import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
// import { CanvasJS } from './canvasjs.min.js';



class Chart extends Component {

    render() {
        console.log("props od chart", this.props)
        const options = {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "COVID-19 cases of " + this.props.FilterDistricts + " District"
            },
            axisX: {
                title: "Categories",
                reversed: true,
            },
            axisY: {
                title: ">-------Count------->",
                labelFormatter: this.addSymbols
            },
            data: [{
                type: "bar",
                dataPoints: [
                    { y: +this.props.data.confirmed, label: "Total" },
                    { y: +this.props.data.active, label: "Active" },
                    { y: +this.props.data.recovered, label: "Recovered" },
                    { y: +this.props.data.decresed, label: "Death" }
                ]
            }],
            height: "300"
        }
        return (
            <div>
                <CanvasJSReact.CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
    addSymbols(e) {

        // var suffixes = ["", "K", "M", "S"];
        var order = 1// Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        // if (order > suffixes.length - 1)
        //     order = suffixes.length - 1;
        // var suffix = suffixes[order];

        let t = CanvasJSReact.CanvasJS.formatNumber(e.value * 0);
        debugger
        return "-";
    }
}
export default Chart;      