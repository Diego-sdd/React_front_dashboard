import React from 'react';
import { Card, Image } from 'react-bootstrap';
import Chart from 'react-google-charts';
import { BsFillCircleFill } from 'react-icons/bs';
import icon_hat from '../../assets/university.png';
import './style.css';
export default function Graphic_Donut() {
    return (
        <Card className="card_chart_pie">
            <div id="top_text">
                <p>Students by type studying</p>
            </div>
            <Image src={icon_hat} className="icon_school_hat" />

            <Chart

                width={'100%'}
                height={'261px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['aaaaa', 5],
                    ['aaaaa', 3],
                    ['aaaaa', 4],
                    ['aaaaa', 2],
                ]}
                options={{
                    //title: 'My Daily Activities',
                    // Just add this option
                    legend: 'none',
                    // legend: {
                    //     textStyle: { fontSize: 12, color: 'red' },
                    //     position: 'bottom',
                    //     alignment: 'start',
                    //     maxLines: 1
                    // },

                    pieHole: 0.8,
                    pieSliceText: 'none',
                    colors: ['#FF4C61', '#33D69F', '#6F52ED', '#FFB800']
                }}
                rootProps={{ 'data-testid': '0' }}
            />
            <div className="info_value">
                <div id="text_icon">
                    <BsFillCircleFill id="icon_ball" />
                    <p id="text_icon">&nbsp;&nbsp;Groups of 20 students </p>
                </div>
                <p id="text_number"><strong>20&nbsp;</strong>(32%)</p>


                <div id="text_icon">
                    <BsFillCircleFill id="icon_ball" />
                    <p id="text_icon">&nbsp;&nbsp;Groups of 20 students </p>
                </div>
                <p id="text_number"><strong>20&nbsp;</strong>(32%)</p>

                <div id="text_icon">
                    <BsFillCircleFill id="icon_ball" />
                    <p id="text_icon">&nbsp;&nbsp;Groups of 20 students </p>
                </div>
                <p id="text_number"><strong>20&nbsp;</strong>(32%)</p>

                <div id="text_icon">
                    <BsFillCircleFill id="icon_ball" />
                    <p id="text_icon">&nbsp;&nbsp;Groups of 20 students </p>
                </div>
                <p id="text_number"><strong>20&nbsp;</strong>(32%)</p>
            </div>
        </Card>
    )
}