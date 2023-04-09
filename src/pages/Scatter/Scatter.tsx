import React from 'react';
import ReactEcharts from "echarts-for-react";
import {ChartData} from '../../Constant/Constant'

const Scatter = () => {

    const makeData = () => {
        let finalData = [];
        for (let i=0; i<ChartData?.length; i++) {
            let tempArr = [];
            tempArr[0] = ChartData[i]["Color intensity"];
            tempArr[1] = ChartData[i]["Hue"];
            finalData.push(tempArr);
        }
        return finalData;
    }

    const data = [
        [10, 30],
        [20, 90],
        [30, 10],
        [40, 50],
        [50, 70],
        [60, 30],
        [70, 80],
        [80, 50],
        [90, 70],
        [100, 20]
    ];

    const option = {
        // title: {
        //     text: 'Scatter Plot (“Color Intensity” on the horizontal axis and “Hue” on the vertical axis.)'
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            scale: true
        },
        yAxis: {
            type: 'value',
            scale: true
        },
        series: [{
            type: 'scatter',
            data: makeData()
        }]
    };

    return <>
        <h4 style={{marginBottom: '0px'}}>Scatter Plot (“Color Intensity” on the horizontal axis and “Hue” on the vertical axis.)</h4>
        <ReactEcharts
            option={option}
        ></ReactEcharts>
    </>
}

export default Scatter;