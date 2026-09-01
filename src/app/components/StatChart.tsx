import React, { useMemo } from 'react';
import ReactECharts from 'echarts-for-react';

export default function StatChart() {
  const option = useMemo(() => {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross', label: { backgroundColor: '#283b56' } }
      },
      legend: {
        data: ['Program Kerja (Total)', 'Jiwa Terdampak (Total)'],
        bottom: 0,
        textStyle: {
          fontFamily: 'inherit',
          fontSize: 13,
          fontWeight: 600
        }
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '12%',
        top: '12%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['13–20 Agust', '21–31 Agust', '1–12 Sept', '13–25 Sept (Target)'],
          axisLabel: { 
            fontFamily: 'inherit', 
            fontWeight: 600,
            fontSize: 13
          },
          axisLine: {
            lineStyle: { color: '#cbd5e1' }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Program Kerja',
          position: 'left',
          axisLine: { show: true, lineStyle: { color: '#059669', width: 2 } }, // Emerald 600
          axisLabel: { formatter: '{value}', fontFamily: 'inherit', fontWeight: 600 },
          nameTextStyle: { fontWeight: 700, padding: [0, 0, 0, 20] }
        },
        {
          type: 'value',
          name: 'Jiwa Terdampak',
          position: 'right',
          axisLine: { show: true, lineStyle: { color: '#ea580c', width: 2 } }, // Orange 600
          axisLabel: { formatter: '{value}', fontFamily: 'inherit', fontWeight: 600 },
          splitLine: { show: false },
          nameTextStyle: { fontWeight: 700, padding: [0, 20, 0, 0] }
        }
      ],
      series: [
        {
          name: 'Program Kerja (Total)',
          type: 'line',
          yAxisIndex: 0,
          smooth: true,
          showSymbol: true,
          symbolSize: 8,
          lineStyle: { width: 4, color: '#059669' },
          itemStyle: { color: '#059669' },
          areaStyle: {
            color: {
              type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(5, 150, 105, 0.5)' },
                { offset: 1, color: 'rgba(5, 150, 105, 0.05)' }
              ]
            }
          },
          data: [3, 6, 10, 14], // Progressive levels 2026
          animationDuration: 4000,
          animationEasing: 'quarticInOut'
        },
        {
          name: 'Jiwa Terdampak (Total)',
          type: 'line',
          yAxisIndex: 1,
          smooth: true,
          showSymbol: true,
          symbolSize: 8,
          lineStyle: { width: 4, color: '#ea580c' },
          itemStyle: { color: '#ea580c' },
          areaStyle: {
            color: {
              type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(234, 88, 12, 0.5)' },
                { offset: 1, color: 'rgba(234, 88, 12, 0.05)' }
              ]
            }
          },
          data: [450, 1200, 2800, 4800], // Progressive levels 2026
          animationDuration: 4000,
          animationEasing: 'quarticInOut'
        }
      ]
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[350px]">
      <ReactECharts option={option} style={{ height: '350px', width: '100%' }} />
    </div>
  );
}
