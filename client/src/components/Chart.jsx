import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const BarChart = ({users=1,jobs,applications}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'doughnut', 
      data: {
        labels: ['Users', 'Jobs', 'Applications'],
        datasets: [
          {
            label: 'Data',
            data: [users, jobs, applications], // Replace with actual data
            backgroundColor: ['#4CAF50', '#FFC107', '#2196F3'], // Customize colors if needed
          },
        ],
      },
      options: {
        
      },
    });
  }, []);

  return <canvas ref={chartRef} ></canvas>;
};
