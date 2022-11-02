import React from 'react';

// Includes the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Includes the fusioncharts library
import FusionCharts from 'fusioncharts';

// Includes the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// Creating the JSON object to store the chart configurations

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'line', // The chart type
    width: '100%', // Width of the chart
    height: '350', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        theme: 'gammel',
        caption: 'Attendace Over a Year',
        yAxisName: 'Days',
        xAxisName: 'Months',
        xAxisNameFontSize: 16,
        yAxisNameFontSize: 16,
        captionFontColor: '#102a42',
        captionFontBold: 1,
        captionFontSize: 20,
        captionFont: 'QuickSand',
        baseFont: 'Open Sans',
        baseFontSize: 12,
        baseFontColor: '#000000',
        showShadow: 2,
        paletteColors: '#2caeba',
        bgColor: '#ffffff',
        showBorder: 1,
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
