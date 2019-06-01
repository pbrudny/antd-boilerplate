import ChartistGraph from "react-chartist";
import React, { Component } from "react";
import {withStyles} from "@material-ui/core";
import Chartist from 'chartist';

import chartsStyle from "assets/jss/material-dashboard-pro-react/views/chartsStyle.jsx";

var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

const straightLinesChart = {
  data: {
    labels: ["'07", "'08", "'09", "'10", "'11", "'12", "'13", "'14", "'15"],
    series: [[10, 16, 8, 13, 20, 15, 20, 34, 30]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    classNames: {
      point: "ct-point ct-white",
      line: "ct-line ct-white"
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

const styles = theme => ({

})

class Chart extends Component {
  render() {
    return (
      <ChartistGraph
        className="ct-chart-white-colors"
        data={straightLinesChart.data}
        type="Line"
        options={straightLinesChart.options}
        listener={straightLinesChart.animation}
      />
    )
  }
}

export default withStyles(chartsStyle)(Chart);
