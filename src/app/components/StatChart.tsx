import React, { useEffect, useMemo, useState } from 'react';
import ReactECharts from 'echarts-for-react';

export default function StatChart() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();

    const observer = new MutationObserver(() => checkDark());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const option = useMemo(() => {
    const textColor = isDark ? '#E2E8F0' : '#1E293B';
    const subTextColor = isDark ? '#94A3B8' : '#64748B';
    const gridBorderColor = isDark ? 'rgba(226, 232, 240, 0.08)' : 'rgba(15, 58, 29, 0.08)';

    return {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        backgroundColor: isDark ? '#1E293B' : '#0F3A1D',
        borderColor: isDark ? '#334155' : '#1E5E2F',
        textStyle: { color: '#FFFFFF' },
        axisPointer: { type: 'cross', label: { backgroundColor: '#283b56' } }
      },
      legend: {
        data: ['Program Kerja (Total)', 'Jiwa Terdampak (Total)'],
        bottom: 0,
        textStyle: {
          fontFamily: 'inherit',
          fontSize: 12,
          fontWeight: 600,
          color: textColor
        }
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '14%',
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
            fontSize: 12,
            color: subTextColor
          },
          axisLine: {
            lineStyle: { color: gridBorderColor }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Program Kerja',
          position: 'left',
          axisLine: { show: true, lineStyle: { color: isDark ? '#34D399' : '#059669', width: 2 } },
          axisLabel: { formatter: '{value}', fontFamily: 'inherit', fontWeight: 600, color: isDark ? '#34D399' : '#059669' },
          splitLine: { lineStyle: { color: gridBorderColor } },
          nameTextStyle: { fontWeight: 700, padding: [0, 0, 0, 20], color: isDark ? '#34D399' : '#059669' }
        },
        {
          type: 'value',
          name: 'Jiwa Terdampak',
          position: 'right',
          axisLine: { show: true, lineStyle: { color: '#F97316', width: 2 } },
          axisLabel: { formatter: '{value}', fontFamily: 'inherit', fontWeight: 600, color: '#F97316' },
          splitLine: { show: false },
          nameTextStyle: { fontWeight: 700, padding: [0, 20, 0, 0], color: '#F97316' }
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
          lineStyle: { width: 3.5, color: isDark ? '#34D399' : '#059669' },
          itemStyle: { color: isDark ? '#34D399' : '#059669' },
          areaStyle: {
            color: {
              type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: isDark ? 'rgba(52, 211, 153, 0.45)' : 'rgba(5, 150, 105, 0.45)' },
                { offset: 1, color: 'rgba(5, 150, 105, 0.02)' }
              ]
            }
          },
          data: [3, 6, 10, 14],
          animationDuration: 2000,
          animationEasing: 'quarticInOut'
        },
        {
          name: 'Jiwa Terdampak (Total)',
          type: 'line',
          yAxisIndex: 1,
          smooth: true,
          showSymbol: true,
          symbolSize: 8,
          lineStyle: { width: 3.5, color: '#F97316' },
          itemStyle: { color: '#F97316' },
          areaStyle: {
            color: {
              type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(249, 115, 22, 0.4)' },
                { offset: 1, color: 'rgba(249, 115, 22, 0.02)' }
              ]
            }
          },
          data: [450, 1200, 2800, 4800],
          animationDuration: 2000,
          animationEasing: 'quarticInOut'
        }
      ]
    };
  }, [isDark]);

  return (
    <div className="w-full h-full min-h-[350px]">
      <ReactECharts option={option} style={{ height: '350px', width: '100%' }} />
    </div>
  );
}
