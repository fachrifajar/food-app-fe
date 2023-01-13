import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import "../styles/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    const token = localStorage.getItem("token");

    if (isLogin && token) {
      navigate("/"); //auto navigate to homepage (restricted to auth user)
    }
  }, [navigate]);

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

                {isError ? (
                  <div class="alert alert-danger" role="alert">
                    {errMsg}
                  </div>
                ) : null}

                <label for="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              {/* <!--@ Input Password --> */}
              <div className="mb-3 form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  autocomplete="current-password"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
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
                <button
                  type="button"
                  className={`btn btn-primary ${
                    isLoading ? "btn-loading" : ""
                  }`}
                  disabled={isLoading}
                  onClick={() => {
                    if (!document.getElementById("terms").checked) {
                      setIsError(true);
                      setErrMsg(
                        "Please agree to the terms and conditions to continue."
                      );
                      return;
                    }
                    setIsLoading(true);
                    axios
                      .post(`${process.env.REACT_APP_URL_BACKEND}/auth/login`, {
                        email,
                        password,
                      })
                      .then((res) => {
                        localStorage.setItem("isLogin", true);
                        localStorage.setItem(
                          "token",
                          res?.data?.data?.accessToken ?? ""
                        );
                        navigate("/"); //redirect to home page
                      })
                      .catch((err) => {
                        setIsError(true);
                        setErrMsg(
                          err?.response?.data?.message?.message ??
                            err?.response?.data?.message?.email?.message ??
                            err?.response?.data?.message?.password?.message ??
                            "Internal server error, please try again later"
                        );
                      })
                      .finally(() => setIsLoading(false));
                  }}>
                  {isLoading ? (
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"></span>
                  ) : (
                    ""
                  )}
                  {isLoading ? "Loading..." : "Log in"}
                </button>
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
