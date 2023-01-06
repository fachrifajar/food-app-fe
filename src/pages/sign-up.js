import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import "../styles/sign-up.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          {/* <!--@ Left Side / background-image -->   */}
          <div className="col-6 left-side">
            <div className="left-side-overlay"></div>
            <div className="logo">
              <img
                src="../images/main-logo.png"
                width="100px"
                alt="main-logo"
              />
              <p className="text-white text-center mt-2">Mama Recipe.</p>
            </div>
          </div>
          {/* <!--@ Right Side / form --> */}
          <div className="col-6 right-side">
            <form>
              {/* <!--@ Input Name --> */}
              <div className="mb-3 form-group">
                <h1>Let's Get Started !</h1>
                <p>Create new account to access all features</p>
                <label for="text">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your Name"
                />
              </div>
              {/* <!--@ Input Email --> */}
              <div className="mb-3 form-group">
                <label for="email">Email address*</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              {/* <!--@ Phone Number --> */}
              <div className="mb-3 form-group">
                <label for="phone-number">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone-number"
                  placeholder="Enter your Phone Number"
                />
              </div>
              {/* <!--@ Input Password --> */}
              <div className="mb-3 form-group">
                <label for="password">Create New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
              {/* <!--@ Re Input Password --> */}
              <div className="mb-3 form-group">
                <label for="re-enter-password">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="re-enter-password"
                  placeholder="Re-Enter password"
                />
              </div>
              {/* <!--@ Checkbox button --> */}
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
              {/* <!--@ Submit button --> */}
              <div className="d-grid">
                <Link to="/" className="btn btn-primary">
                  Register Account
                </Link>
              </div>
              {/* <!-- @ link to login --> */}
              <p className="already-have-account">
                Already have account? &nbsp;
                <Link className="login" to="/login">
                  Log in Here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
