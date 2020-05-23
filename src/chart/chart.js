import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Chart(props) {



    return (
        <div>
            <Bar
                data={props.state}
                options={{
                    title: {
                        display: true,
                        text: `Covid-19 cases in ${props.district} District`,
                        fontSize: 20,
                        fontColor: "white"
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    callback: function (label, index, labels) {
                                        return label;
                                    },
                                    fontSize: 12,
                                    fontColor: 'white'
                                }
                            }
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    callback: function (label, index, labels) {
                                        return label;
                                    },
                                    fontSize: 14,
                                    fontColor: 'white'
                                },
                                display: true,
                            }
                        ]
                    }
                }}
                height={"200"}


            />
        </div>
    )

}