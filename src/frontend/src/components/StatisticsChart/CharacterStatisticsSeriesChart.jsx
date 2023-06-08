import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const CharacterStatisticsSeriesChart = ({ character }) => {

    const movies = character.movies || {};

    const option = {
        color: ['var(--orange)'],

        toolbox: {
            feature: {
                saveAsImage: {},
            }
        },

        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross"
            },
            backgroundColor: "rgba(0, 0, 0, 0.59)",
            borderWidth: 0,
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
            show: false,
        },

        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: [
                    { value: 'Fellowship of The Ring', textStyle: { align: 'center', rotate: 45 } },
                    { value: 'The Two Towers', textStyle: { align: 'center', rotate: 45 } },
                    { value: 'The Return of The King', textStyle: { align: 'center', rotate: 45 } },
                    { value: 'Series Total', textStyle: { align: 'center', rotate: 45 } },
                ]
            }
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false,
                }
            }
        ],
        series: [
            {
                type: "line",
                smooth: true,
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgb(255, 191, 0)",
                        },
                        {
                            offset: 1,
                            color: "#F450D3"
                        }
                    ]),
                    width: 4
                },
                areaStyle: {
                    opacity: .5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
                        {
                            offset: 0,
                            color: "#FE4C00"
                        },
                        {
                            offset: 1,
                            color: "rgba(255,144,70,0.1)"
                        }
                    ])
                },
                emphasis: {
                    focus: "series",
                },
                showSymbol: false,
                data: [
                    movies['The Fellowship Of The Ring'] || 0,
                    movies['The Two Towers'] || 0,
                    movies['The Return Of The King'] || 0,
                    character.wordTotal
                ]
            }
        ]
    }

    return (
        <ReactECharts option={option} />
    )

}

export default CharacterStatisticsSeriesChart;