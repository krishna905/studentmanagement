import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Chart, CandyTheme);

// Creating the JSON object to store the chart configurations

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d', // The chart type
    width: '100%', // Width of the chart
    height: '350', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        theme: 'fusion',
        caption: 'Overall Performance',
        decimals: 0,
        // pieRadius: '45%',
        doughnutRadius: '60%',
        showPercentValues: 0,
        // captionFontColor: '#000000',
        captionFontBold: 0,
        captionFontSize: 20,
        captionFont: 'Roboto',
        baseFont: 'Open Sans',
        baseFontSize: 16,
        // baseFontColor: '#617d98',
        // smartLineColor: '#617d98',
        showShadow: 0,
        showPlotBorder: 0,
        // paletteColors:
        //   '#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA',
        use3DLighting: 0,
        useDataPlotColorForLabels: 0,
        // bgColor: '#FFFFFF',
        showBorder: 1,
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
