// ##############################
// // // Badge component styles
// #############################

import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  blackColor
} from "assets/jss/material-dashboard-pro-react.jsx";

const badgeStyle = {
  badge: {
    borderRadius: "12px",
    padding: "8px 14px",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    verticalAlign: "baseline",
    display: "inline-block"
  },
  primary: {
    backgroundColor: primaryColor
  },
  warning: {
    backgroundColor: warningColor
  },
  danger: {
    backgroundColor: dangerColor
  },
  success: {
    backgroundColor: successColor
  },
  info: {
    backgroundColor: infoColor
  },
  rose: {
    backgroundColor: roseColor
  },
  gray: {
    backgroundColor: grayColor
  },
  black: {
    backgroundColor: blackColor
  }

};

export default badgeStyle;
