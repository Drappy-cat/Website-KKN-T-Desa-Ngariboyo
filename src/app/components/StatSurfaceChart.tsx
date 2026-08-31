import React, { useMemo } from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts-gl';

export default function StatSurfaceChart() {
  const option = useMemo(() => {
    // Generate surface data representing our 4 main stats as peaks:
    // 15 Mahasiswa, 20+ Proker, 4 Jurusan, 4800 Jiwa (scaled down for visualization)
    const data = [];
    for (let x = -5; x < 5; x += 0.5) {
      for (let y = -5; y < 5; y += 0.5) {
        // Base terrain noise
        let z = Math.sin(x) * Math.cos(y) * 2;
        
        // Peak 1: Mahasiswa (15)
        z += 15 * Math.exp(-Math.pow(x + 3, 2) - Math.pow(y + 3, 2));
        
        // Peak 2: Proker (20)
        z += 20 * Math.exp(-Math.pow(x - 2, 2) - Math.pow(y + 3, 2));
        
        // Peak 3: Jurusan (4) -> scaled visually to 10
        z += 10 * Math.exp(-Math.pow(x + 3, 2) - Math.pow(y - 2, 2));
        
        // Peak 4: Jiwa Terdampak (4800) -> scaled to 48
        z += 48 * Math.exp(-Math.pow(x - 2, 2) - Math.pow(y - 2, 2));

        // Format: [x, y, z]
        data.push([x, y, z]);
      }
    }

    return {
      tooltip: {
        show: true,
        formatter: (params: any) => {
          return `Nilai: ${params.data[2].toFixed(1)}`;
        }
      },
      visualMap: {
        show: true,
        dimension: 2,
        min: -2,
        max: 50,
        inRange: {
          color: [
            '#313695', // deep blue
            '#4575b4',
            '#e0f3f8', // light blue
            '#a6d96a', // green
            '#fdae61', // orange
            '#f46d43', // red-orange
            '#d73027'  // deep red
          ]
        },
        textStyle: {
          color: '#fff'
        }
      },
      xAxis3D: {
        type: 'value',
        name: 'Waktu / X',
        axisLine: { lineStyle: { color: '#ccc' } },
        axisLabel: { textStyle: { color: '#ccc' } }
      },
      yAxis3D: {
        type: 'value',
        name: 'Kategori / Y',
        axisLine: { lineStyle: { color: '#ccc' } },
        axisLabel: { textStyle: { color: '#ccc' } }
      },
      zAxis3D: {
        type: 'value',
        name: 'Nilai (Z)',
        axisLine: { lineStyle: { color: '#ccc' } },
        axisLabel: { textStyle: { color: '#ccc' } }
      },
      grid3D: {
        viewControl: {
          autoRotate: true,
          autoRotateSpeed: 15, // Speed of rotation
          distance: 220,
          alpha: 30, // vertical angle
          beta: 45 // horizontal angle
        },
        light: {
          main: {
            intensity: 1.2,
            shadow: true
          },
          ambient: {
            intensity: 0.3
          }
        },
        axisPointer: {
          show: false
        }
      },
      series: [
        {
          type: 'surface',
          data: data,
          wireframe: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.5)',
              width: 1
            }
          },
          shading: 'color', // Use colors defined in visualMap
          itemStyle: {
            opacity: 0.9 // Slight transparency
          }
        }
      ]
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[450px]">
      <ReactECharts 
        option={option} 
        style={{ height: '450px', width: '100%' }} 
        opts={{ renderer: 'canvas' }}
      />
    </div>
  );
}
