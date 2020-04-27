import React from 'react';
import { Chart } from "react-google-charts";
import { BsFillCircleFill } from 'react-icons/bs';
import { Card } from 'react-bootstrap';
import './style.css';
import './responsive_style.css';
export default function Chart_Column() {
    return (
        <Card className="card_column">
            <div className="text_top">
                <h6>The number of applied and left students per month</h6>
                <div id="option">

                    <BsFillCircleFill id="icon_ball" />
                    <p>Aplied</p>

                    <BsFillCircleFill id="icon_ball_two" />
                    <p>Left</p>
                </div>
            </div>

            <Chart
                className="chart_basic"
                // width={100}
                height={360}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Jan', '2010', '2000'],
                    ['Jan', 40, 25],
                    ['Feb', 40, 25],
                    ['Mar', 39, 36],
                    ['Apr', 20, 28],
                    ['May', 20, 15],
                    ['Jun', 15, 15],
                    ['Jul', 26, 28],
                    ['Sep', 20, 19],
                    ['Oct', 15, 15],
                    ['Nov', 20, 35],
                    ['Dec', 12, 44],
                ]}
                options={{
                    //title: '',
                    chartArea: { width: '90%' },
                    legend: 'none',
                    colors: ['#6F52ED', '#FF7A00'],
                    hAxis: {
                        // title: 'Total Population',
                        minValue: 0,
                    },
                }}
                legendToggle
            />
        </Card>
    )
}