import React from 'react';
import { Bar } from 'react-chartjs-2';

const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            fontColor: "white",
            backgroundColor: 'rgba(75,192,12,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
}

export default class Chart extends React.Component {
    render() {
        return (
            <div>
                <Bar
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Covid-19 cases in District',
                            fontSize: 20,
                            fontColor: "white"
                        },
                        legend: {
                            display: false,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}