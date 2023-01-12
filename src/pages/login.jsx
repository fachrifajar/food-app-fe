import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login-page">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          {/* <!--@ Left Side / background-image -->   */}
          <div className="col-6 left-side">
            <div className="left-side-overlay"></div>
            <div className="logo">
              <img src="/images/main-logo.png" width="100px" alt="main-logo" />
              <p className="text-white text-center mt-2">Mama Recipe.</p>
            </div>
          </div>
          {/* <!--@ Right Side / form --> */}
          <div className="col-6 right-side">
            <form>
              {/* <!--@ Input Email --> */}
              <div className="mb-3 form-group">
                <h1>Welcome</h1>
                <p>Log in into your existing account</p>
                <label for="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              {/* <!--@ Input Password --> */}
              <div className="mb-3 form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                />
                <label className="form-check-label" for="terms">
                  I agree to the terms & conditions
                </label>
              </div>
              <div className="d-grid">
                <Link to="/" className="btn btn-primary">
                  Log in
                </Link>
              </div>
              <Link className="forgot-password" to="/forgot-password">
                Forgot Password ?
              </Link>

              <p className="do-not-have-an-account">
                Don’t have an account? &nbsp;
                <Link className="sign-up" to="/sign-up">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
