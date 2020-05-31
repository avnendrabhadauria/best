import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Chart(props) {



    return (
        <div style={{ "height": "90%" }}>
            <Bar
                data={props.state}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: `Covid-19 cases in ${props.district} district`,
                        fontSize: 20,
                        fontColor: "#FFFF66"
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
                                    fontColor: '#F7FF87'
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
                                    fontColor: '#F7FF87'
                                },
                                display: true,
                            }
                        ]
                    }
                }}



            />
        </div>
    )

}