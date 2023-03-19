// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, chart, FusionTheme);


// STEP 3 - Creating the JSON object to store the chart configurations


const ChartComponent=({data})=>{

  const chartConfigs = {
    type: "pie3D", // The chart type
    width: "1170", // Width of the chart
    height: "470", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
       caption:'Languages',
       theme:'fusion',
       pieRadius:'50%'
      },
      // Chart Data
      data,
    }
  };
    return (<ReactFC {...chartConfigs} />);
}

export default ChartComponent;