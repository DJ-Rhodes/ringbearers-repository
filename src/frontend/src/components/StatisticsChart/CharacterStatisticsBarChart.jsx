import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const CharacterStatisticsBarChart = ({ character }) => {

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
                type: "shadow"
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
                data: ["The Fellowship of The Ring", "The Two Towers", "The Return of The King", "Lord of The Ring Series"]
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
                type: "bar",
                barWidth: "60%",
                itemStyle: {
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
                    opacity: 0.8
                },
                emphasis: {
                    focus: "series",
                },
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

export default CharacterStatisticsBarChart;