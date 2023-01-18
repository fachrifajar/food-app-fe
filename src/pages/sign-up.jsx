import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import "../styles/sign-up.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [username, SetUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [ReEnterPassword, SetReEnterPassword] = React.useState("");
  const [phone_number, Setphone_number] = React.useState("");
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

                {isError ? (
                  <div class="alert alert-danger" role="alert">
                    {errMsg}
                  </div>
                ) : null}

                <label for="text">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your Name"
                  onChange={(event) => SetUsername(event.target.value)}
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
                  onChange={(event) => setEmail(event.target.value)}
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
                  onChange={(event) => Setphone_number(event.target.value)}
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
                  onChange={(event) => setPassword(event.target.value)}
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
                  onChange={(event) => SetReEnterPassword(event.target.value)}
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
                      .post(
                        `${process.env.REACT_APP_URL_BACKEND}/users/register`,
                        {
                          email,
                          password,
                          username,
                          phone_number,
                        }
                      )
                      .then((res) => {
                        console.log(res);
                        alert("Account created successfully");
                        navigate("/login");

                      })
                      .catch((err) => {
                        setIsError(true);
                        console.log(err);
                        setErrMsg(
                          err?.response?.data?.message?.message ??
                            err?.response?.data?.message?.username?.message ??
                            err?.response?.data?.message?.email?.message ??
                            err?.response?.data?.message?.phone_number
                              ?.message ??
                            err?.response?.data?.message?.password?.message ??
                            "Internal server error, please try again later"
                        );
                      })
                      .finally(() => {
                        setIsLoading(false);
                      });
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
