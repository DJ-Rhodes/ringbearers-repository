import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const StatisticsChart = ({ movie }) => {
  const option = {
    color: ['var(--orange)'],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      backgroundColor: 'rgba(0, 0, 0, 0.59)',
      borderWidth: 0,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: false,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Budget', 'Revenue', 'Profit'],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          fontSize: 14,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        type: 'bar',
        barWidth: '60%',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#F450D3',
            },
            {
              offset: 1,
              color: 'rgb(255, 191, 0)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [movie.budget, movie.revenue, movie.revenue - movie.budget],
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default StatisticsChart;