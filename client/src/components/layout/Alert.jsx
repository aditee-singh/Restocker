import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "reactstrap";
import { Fragment } from "react";
const ReactAlert = () => {
  const alerts = useSelector((state) => state.alert);
  const allAlerts = alerts.map((alert) => (
    <div key={alert.id}>
      <Alert color={alert.alertType}>{alert.msg}</Alert>
    </div>
  ));
  return <Fragment>{alerts.length > 0 ? allAlerts : null}</Fragment>;
};
export default ReactAlert;
