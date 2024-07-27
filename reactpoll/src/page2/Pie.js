
import React from 'react'
import'./Pie.css';


import { Chart } from "react-google-charts";

export const options = {
  legend: "none",
  pieSliceText: "label",
  pieStartAngle: 100,
  chartArea:{
    width:'100%',
    height:'80%'
  }
};

export function Pie({data}) {
  return (
    <Chart 
    className='pie-chart-container'
      chartType="PieChart"
      data={data}
      options={options}
    
    />
  );
}


export default Pie