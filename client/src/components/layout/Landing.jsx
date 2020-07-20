import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const Landing = () => {
  const auth = useSelector((state) => state.auth);
  if (auth.isAuthenticated) {
    return <Redirect to="/posts"></Redirect>;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Restocker</h1>
          <p className="lead">Buy Share Sell</p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
