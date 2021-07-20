import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { useSelector } from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";
import { Fragment } from "react";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const ReactAlert = () => {
  const [state, setState] = useState({
    vertical: "top",
    horizontal: "right",
  });
  const alerts = useSelector((state) => state.alert);
  const allAlerts = alerts.map((alert) => (
    <Snackbar
      open={true}
      autoHideDuration={1500}
      anchorOrigin={{ ...state }}
      key={state.vertical + state.horizontal}
    >
      <Alert
        key={alert.id}
        severity={alert.alertType === "danger" ? "error" : "success"}
      >
        {alert.msg}
      </Alert>
    </Snackbar>
  ));
  return <Fragment>{alerts.length > 0 ? allAlerts : null}</Fragment>;
};
export default ReactAlert;
