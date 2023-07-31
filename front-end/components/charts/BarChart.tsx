import React from 'react'
import { Bar } from 'react-chartjs-2'
import { 
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
 } from "chart.js";
import { ChartInterface } from '../Interfaces';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement
)
function Charts(dataValues : ChartInterface[]) {
  const options = {
    maintainAspectRatio: false,
    scales: {
        yAxes:{
            grid: {
                drawBorder: false,
                color: '#FFFFFF',
            },
            ticks:{
                beginAtZero: true,
                color: 'white',
                fontSize: 12,
            }
        },
        xAxes: {
            grid: {
                drawBorder: false,
                color: '#FFFFFF',
            },
            ticks:{
                beginAtZero: false,
                color: 'yellow',
                fontSize: 16,
            }
        },
    },
    CategoryScale : false
  }
  const data = {
    labels : ["mon", "tue", "wed", "thur", "fri", "sat", "sun", "another", "file"],
    textColor : "white",
    datasets : [
      {
        label : "",
        data : [3, 19, 5, 28, 10, 2, 9, 7, 30],
        backgroundColor:["red", "blue", "green", "aqua", "purple", "brown", "yellow", "gray", "white" ],
        hoverBackgroundColor : "black",
      }
     ]
  }
  // max values of 8

  return <Bar data={data} options={options} className=' min-h-full'/>
}

export default Charts