import React from "react";
import { useSelector } from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";
import { Fragment } from "react";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const ReactAlert = () => {
  const alerts = useSelector((state) => state.alert);
  const allAlerts = alerts.map((alert) => (
    <Alert key={alert.id} severity="error">
      {alert.msg}
    </Alert>
  ));
  return <Fragment>{alerts.length > 0 ? allAlerts : null}</Fragment>;
};
export default ReactAlert;
