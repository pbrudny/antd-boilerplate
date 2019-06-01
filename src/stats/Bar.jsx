import ChartistGraph from "react-chartist";
import React, { Component } from "react";
import {withStyles} from "@material-ui/core";

import chartsStyle from "assets/jss/material-dashboard-pro-react/views/chartsStyle.jsx";

var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

const simpleBarChart = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
  },
  options: {
    seriesBarDistance: 10,
    axisX: {
      showGrid: false
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

class Bar extends Component {
  render() {
    return (
      <ChartistGraph
        className="ct-chart-white-colors"
        data={simpleBarChart.data}
        type="Bar"
        options={simpleBarChart.options}
        responsiveOptions={simpleBarChart.responsiveOptions}
        listener={simpleBarChart.animation}
      />
    )
  }
}

export default withStyles(chartsStyle)(Bar);
