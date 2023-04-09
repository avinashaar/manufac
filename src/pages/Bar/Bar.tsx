import React from 'react';
import ReactEcharts from "echarts-for-react"
import {ChartData} from '../../Constant/Constant'

const Bar = () => {

    /**
     * Function  to  make x-axis label dynamic;
     */
    const getXAxisLabel = () => {
        let obj : any = {}
        for (let i=0; i<ChartData?.length; i++) {
            if (!Object.keys(obj).includes(String(ChartData[i]["Alcohol"]))) {
                obj[ChartData[i]["Alcohol"]] = `Alcohol category ${ChartData[i]["Alcohol"]}`
            }
        }
        return Object.values(obj)
    }


    /**
     * Function  to  get the average of malic acid
     */
    const getAverageOfAcid = () => {
        const grouped = ChartData.reduce((a, e) => {
            if (!a[e["Alcohol"]]) {
                a[e["Alcohol"]] = [];
            }

            a[e["Alcohol"]].push(e["Malic Acid"]);
            return a;
        }, {} as Record<any, any>);

        const avgs :any = Object.fromEntries(
            Object.entries(grouped).map(([k, v]) => [
                k, v.reduce((a:any, e:any) => a + e, 0) / v.length
            ])
        );
       return avgs;
    }


    const options = {
        // title: {
        //     text: 'Bar chart'
        // },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: "category",
            data: getXAxisLabel()
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                data: Object.values(getAverageOfAcid()),
                type: "bar",
                smooth: true,
                label: {
                    show: false,
                    position: 'top'
                },
                legend: true
            },
        ],
        tooltip: {
            trigger: "axis"
        }
    }

    return <>
        <h4 style={{marginBottom: '0px'}}>Bar Plot</h4>
        <ReactEcharts
            option={options}
        ></ReactEcharts>
    </>
}

export default Bar;